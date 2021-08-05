const UsersRoute = require('express').Router();
const UsersController = require('../controllers/UsersController');

UsersRoute.get('/', UsersController.listUsers);
UsersRoute.post('/', UsersController.addUsers);
UsersRoute.put('/:id', UsersController.updateUsers);
UsersRoute.delete('/:id', UsersController.deleteUsers);
UsersRoute.post('/register', UsersController.register);
UsersRoute.post('/login', UsersController.login);

module.exports = UsersRoute;
