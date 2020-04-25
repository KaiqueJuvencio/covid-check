"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "symptons",
      [
        {
          name: "febre",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "cansaço",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "dor_de_garganta",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "nariz_congestionado",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "diarreia",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "pneumonia",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "falta_de_ar",
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("symptons", null, {});
  },
};
