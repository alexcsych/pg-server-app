const { Router } = require('express');
const { usersController } = require('../controllers');
const { paginate } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get(paginate.paginateUser, usersController.getUsers);

usersRouter
  .route('/:userId')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

module.exports = usersRouter;
