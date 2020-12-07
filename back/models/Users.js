const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt")

class Users extends Sequelize.Model { }

Users.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  }

}, { sequelize: db, modelName: 'user' })

Users.prototype.hash = function (plainPassword, salt) {
  return bcrypt.hash(plainPassword, salt)
    .then(hash => { return hash })
}

Users.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = Users;

