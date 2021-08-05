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
    let blogcomments = fs.readFileSync('./blogcomment.json', 'utf8');
    let parsedBlogcomments = JSON.parse(blogcomments);
    let data = parsedBlogcomments.map((blogcom) => {
      const { author, BlogId } = blogcom;
      return {
        author,
        BlogId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert('BlogComments', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('BlogComments', null, {});
  },
};
