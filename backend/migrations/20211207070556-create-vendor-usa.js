'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VendorUsas', {
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
      about_business: {
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
      owner_name: {
        type: Sequelize.STRING
      },
      owner_email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      post_code: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      categories: {
        type: Sequelize.TEXT
      },
      banner: {
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
      gallery: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('VendorUsas');
  }
};