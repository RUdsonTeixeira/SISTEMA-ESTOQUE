'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /** criar
     * Add altering commands here.
     *
     * Example:
     * 
     */
     await queryInterface.createTable('marca', {
        id: {
          type:Sequelize.INTEGER,
          primarykey: true,
          autoIncrement: true
        },
        nome: { 
          type:Sequelize.STRING,
          allowNull: false
        } 

      });
  },

  down: async (queryInterface, Sequelize) => {
    /** remover
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
