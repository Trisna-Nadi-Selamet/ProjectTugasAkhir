const TypesRoute = require('express').Router();

const TypesController = require('../controllers/TypesController');

TypesRoute.get('/', TypesController.listTypes);
TypesRoute.post('/', TypesController.addTypes);
TypesRoute.put('/:id', TypesController.updateTypes);
TypesRoute.delete('/:id', TypesController.deleteTypes);

module.exports = TypesRoute;
