const { Blog, User, BlogComment } = require('../models');
const { Op } = require('sequelize');
class BlogsController {
  static async listBlogs(req, res) {
    try {
      let blogs = await Blog.findAll({
        //   order: [['id', 'ASC']],
        // },
        // {
        include: [User, BlogComment],
      });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async searchBlogs(req, res) {
    let title = req.params.title;
    try {
      let blogs = await Blog.findAll({
        where: {
          // [op.substring]:
          title,
        },
      });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async addBlogs(req, res) {
    let { title, content, author, tags, status, createAdt, UserId } = req.body;
    try {
      let blogs = await Blog.create({
        title,
        content,
        author,
        tags,
        status,
        createAdt,
        UserId,
      });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateBlogs(req, res) {
    try {
      const id = +req.params.id;
      let { title, content, author, tags, status, createAdt, UserId } = req.body;
      let result = await Blog.update(
        {
          title,
          content,
          author,
          tags,
          status,
          createAdt,
          UserId,
        },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 1) {
        res.status(200).json({
          message: 'id ' + id + ' Succses Updated Id New!',
        });
      } else {
        throw {
          message: 'Failed To Updated!',
        };
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteBlogs(req, res) {
    const id = +req.params.id;
    try {
      Blog.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: 'Id ' + id + ' Succses Delete Id !',
      });

      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = BlogsController;
