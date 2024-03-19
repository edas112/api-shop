function postProductValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is required');
  }
  if (!props?.description?.trim()) {
    throw new Error('Description is required');
  }
}

module.exports = { postProductValidation };
