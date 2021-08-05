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
    let blogs = fs.readFileSync('./blogs.json', 'utf8');
    let parsedBlogs = JSON.parse(blogs);
    let data = parsedBlogs.map((blog) => {
      const { title, content, author, tags, status, createAdt, UserId } = blog;
      return {
        title,
        content,
        author,
        tags,
        status,
        createAdt,
        UserId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert('Blogs', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Blogs', null, {});
  },
};
