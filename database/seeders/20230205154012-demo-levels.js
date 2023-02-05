"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("levels", [
      {
        name: "Mudah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sedang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sulit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("levels", null, {});
  },
};
