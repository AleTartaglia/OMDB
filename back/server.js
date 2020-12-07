const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require("./config/db");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const session = require("express-session");
const passport = require("passport");
const { Users } = require("./models")
const LocalStrategy = require('passport-local').Strategy;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//***********MIDDLEWARE DE LOGEO CON MORGAN************
app.use(morgan('tiny'))

app.use(express.static('./public'))

//COOKIEPARSER
app.use(cookieParser());
app.use(session({ secret: "cafeparatodos" }))


//PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      Users.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);
// How we save the user
passport.serializeUser(function (user, done) {
  console.log("user en passport", user)
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function (id, done) {
  console.log("id en passport", id)
  Users.findByPk(id)
    .then(user => done(null, user))
});


//*******REQUIRO RUTAS*********/
app.use('/api', require('./routes'));

app.use("/*", function (req, res, next) {
  res.sendFile(__dirname + "/public/index.html")

})


db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("listening on port 3000")
    })
  })
  .catch(console.error)
