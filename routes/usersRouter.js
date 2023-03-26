const { Router } = require('express');
const yup = require('yup');
const { usersController } = require('../controllers');
const { paginate } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(async (req, res, next) => {
    const { body } = req;
    const NAME_VALIDATION_SCHEMA = yup.string().min(2).max(64).required();
    const USER_CREATION_VALIDATION_SCHEMAS = yup.object({
      firstName: NAME_VALIDATION_SCHEMA,
      lastName: NAME_VALIDATION_SCHEMA,
      email: yup.string().email(),
      tel: yup
        .string()
        .length(13)
        .matches(/^\+380\d{9}$/),
    });
    try {
      req.body = await USER_CREATION_VALIDATION_SCHEMAS.validate(body);
      next();
    } catch (err) {
      next(err);
    }
  }, usersController.createUser)
  .get(paginate.paginateUser, usersController.getUsers);

usersRouter
  .route('/:userId')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

module.exports = usersRouter;
