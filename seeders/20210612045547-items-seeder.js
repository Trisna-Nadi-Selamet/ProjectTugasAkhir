'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let items = fs.readFileSync('./items.json', 'utf8');
    let parsedItems = JSON.parse(items);
    let data = parsedItems.map((item) => {
      const { name, stock, price, image, category, UserId, TypeId } = item;
      return {
        name,
        stock,
        price,
        image,
        category,
        UserId,
        TypeId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert('Items', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Items', null, {});
  },
};
