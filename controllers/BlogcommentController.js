const { BlogComment } = require('../models');

class BlogsController {
  static async listBlogcomment(req, res) {
    try {
      let blogcom = await BlogComment.findAll({
        order: [['id', 'ASC']],
      });
      res.status(200).json(blogcom);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async addBlogcomment(req, res) {
    let { author, BlogId } = req.body;
    try {
      let BlogComments = await BlogComment.create({
        author,
        BlogId,
      });
      res.status(200).json(BlogComments);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateBlogcomment(req, res) {
    try {
      const id = +req.params.id;
      let { author, BlogId } = req.body;
      let result = await BlogComment.update(
        {
          author,
          BlogId,
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
  static async deleteBlogcomment(req, res) {
    const id = +req.params.id;
    try {
      BlogComment.destroy({
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
