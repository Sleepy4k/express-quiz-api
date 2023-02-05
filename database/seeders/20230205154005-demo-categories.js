"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Politik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Olahraga",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sejarah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
