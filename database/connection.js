const { Sequelize } = require('sequelize')
const DATABASE = "sistema-estoque"
const USERNAME = "postgres"
const PASSWORD = "ifms"
const HOST = "localhost"

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: "postgres"
  });

  async function test(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
//test()
module.exports = sequelize