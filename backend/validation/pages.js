const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePageInput(data) {
 const errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.tile = !isEmpty(data.tile) ? data.tile:"";
  data.body = !isEmpty(data.body) ? data.body:"";

  // Name checks
  if (Validator.isEmpty(data.tile)) {
    errors.tile = "Name field is required";
  }

if (Validator.isEmpty(data.body)) {
    errors.body = "Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
