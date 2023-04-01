const {
  USER_CREATION_VALIDATION_SCHEMAS,
  USER_UPDATE_VALIDATION_SCHEMAS,
} = require('../utils/validateSchemas');

module.exports.validateUserOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    req.body = await USER_CREATION_VALIDATION_SCHEMAS.validate(body);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateUserOnUpdate = async (req, res, next) => {
  const { body } = req;
  try {
    req.body = await USER_UPDATE_VALIDATION_SCHEMAS.validate(body);
    next();
  } catch (err) {
    next(err);
  }
};
