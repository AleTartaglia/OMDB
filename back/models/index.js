const Users = require("./Users");
const Favorites = require("./Favorites")


Favorites.belongsTo(Users)
Users.hasMany(Favorites)

module.exports = { Users, Favorites }