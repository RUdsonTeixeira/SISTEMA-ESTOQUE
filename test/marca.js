const Marca = require('../models/Marca')
const connection = require('../database/connection')
Marca.init({
    sequelize:connection
})
async function insert(nome){
    const marca = await Marca.create({
        nome:nome
    })
}
insert("Nestle")