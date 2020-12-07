const Sequelize = require("sequelize");
const db = require("../config/db");

class Favorites extends Sequelize.Model { }

Favorites.init({
  Title: {
    type: Sequelize.STRING,
  },
  Poster: {
    type: Sequelize.STRING
  },

}, { sequelize: db, modelName: "favorite" })

module.exports = Favorites