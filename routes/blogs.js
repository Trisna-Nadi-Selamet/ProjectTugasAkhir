const BlogsRoute = require('express').Router();

const BlogsController = require('../controllers/BlogsController');

BlogsRoute.get('/', BlogsController.listBlogs);
BlogsRoute.get('/search/:title', BlogsController.searchBlogs);
BlogsRoute.post('/', BlogsController.addBlogs);
BlogsRoute.put('/:id', BlogsController.updateBlogs);
BlogsRoute.delete('/:id', BlogsController.deleteBlogs);

module.exports = BlogsRoute;
