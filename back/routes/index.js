const router = require('express').Router();
const { Users, Favorites } = require("../models")
//requerir los models
//register login logut me add favorites
const passport = require("passport")

/*
  ALL YOUR ROUTES HERE!
*/
router.post("/register", (req, res) => {
  Users.create(req.body)
    .then(() => res.sendStatus(201))
})

router.post("/login", passport.authenticate('local'), (req, res, next) => {
  res.status(200).json({
    name: req.user.name,
    email: req.user.email,
    id: req.user.id
  })
})

router.post("/logout", (req, res) => {
  req.logout();
  res.send('Su sesion ha finalizado');
})

router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      name: req.user.name,
      email: req.user.email,
      id: req.user.id
    })
  } else {
    res.json({})
  }

})

//FAVORITOS
router.get("/favorites/:id", (req, res, next) => {
  Favorites.findAll({
    where: {
      userId: req.params.id
    }
  }).then((favs) => { res.send(favs) })

})
router.post("/favorites", (req, res, next) => {
  Favorites.create({
    Title: req.body.title,
    Poster: req.body.poster
  })
    .then((movieFav) => {
      const user = req.body.user
      movieFav.setUser(user)
    })
    .then(() => res.status(201).send("pelicula agregada a favoritos correctamente"))
})
router.delete("/favorites/delete/:id", (req, res, next) => {
  Favorites.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).send("pelicula favorita eliminada"))
})

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});


module.exports = router;
