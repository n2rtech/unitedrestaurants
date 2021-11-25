'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      business_name: {
        type: Sequelize.STRING
      },
      business_email: {
        type: Sequelize.STRING
      },
      manager_name: {
        type: Sequelize.STRING
      },
      manager_email: {
        type: Sequelize.STRING
      },
      banner: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.STRING
      },
      website_link: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      youtube: {
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
    await queryInterface.dropTable('Profiles');
  }
};