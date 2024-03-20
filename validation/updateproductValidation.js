const { Types } = require('mongoose');

function updateproductValidation(id, body) {
  if (
    !body ||
    (!body.hasOwnProperty('title') &&
      !body.hasOwnProperty('description') &&
      !body.hasOwnProperty('img'))
  ) {
    throw new Error('netinkami duomenys');
  }

  if (!body?.title?.trim()) {
    throw new Error('Title is required');
  }
  if (!body?.description?.trim()) {
    throw new Error('Description is required');
  }

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('ID is required');
  }
}

module.exports = { updateproductValidation };
