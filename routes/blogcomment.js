const BlogcommentRoute = require('express').Router();

const BlogcommentController = require('../controllers/BlogcommentController');

BlogcommentRoute.get('/', BlogcommentController.listBlogcomment);
BlogcommentRoute.post('/', BlogcommentController.addBlogcomment);
BlogcommentRoute.put('/:id', BlogcommentController.updateBlogcomment);
BlogcommentRoute.delete('/:id', BlogcommentController.deleteBlogcomment);

module.exports = BlogcommentRoute;
