const { Model } = require('sequelize')
const connection = require('../database/connection')

class Marca extends Model{

}

Marca.init({
    sequelize: connection
})
module.exports = Marca