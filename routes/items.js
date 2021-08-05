const ItemsRoute = require('express').Router();
const { authentication, authorization } = require('../middlewares/auth');
const ItemsController = require('../controllers/ItemsController');

ItemsRoute.get('/', ItemsController.listItems);
ItemsRoute.get('/search/:name', ItemsController.searchItems);
ItemsRoute.post('/', authentication, ItemsController.addItems);
ItemsRoute.put('/:id', ItemsController.updateItems);
ItemsRoute.delete('/:id', ItemsController.deleteItems);
module.exports = ItemsRoute;
