'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vendors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
       mobile: {
        type: Sequelize.STRING
      },
       address: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      wallet_balance: {
        type: Sequelize.DOUBLE
      },
      subscription_plan: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      membership_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Vendors');
  }
};