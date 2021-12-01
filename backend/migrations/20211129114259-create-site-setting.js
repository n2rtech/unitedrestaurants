'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SiteSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maintenance_mode: {
        type: Sequelize.STRING
      },
      site_name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      facebook_links: {
        type: Sequelize.STRING
      },
      twitter_links: {
        type: Sequelize.STRING
      },
      google_plus_links: {
        type: Sequelize.STRING
      },
      linkedin_links: {
        type: Sequelize.STRING
      },
      instagram_links: {
        type: Sequelize.STRING
      },
      logo: {
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
    await queryInterface.dropTable('SiteSettings');
  }
};