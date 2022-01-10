'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BusinessAdvertises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      business_name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      about_business: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.TEXT
      },
      banner: {
        type: Sequelize.STRING
      },
      deletedAt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BusinessAdvertises');
  }
};