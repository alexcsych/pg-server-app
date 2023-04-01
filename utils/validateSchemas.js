const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup.string().min(2).max(64).required();
const TEL_VALIDATION_SCHEMA = yup
  .string()
  .length(13)
  .matches(/^\+380\d{9}$/);

module.exports.USER_CREATION_VALIDATION_SCHEMAS = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email(),
  tel: TEL_VALIDATION_SCHEMA,
});

module.exports.USER_UPDATE_VALIDATION_SCHEMAS = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email().required(),
  tel: TEL_VALIDATION_SCHEMA.required(),
});
