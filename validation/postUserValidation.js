function postUserValidation(props) {
  if (
    !props ||
    !props.hasOwnProperty('username') ||
    !props.hasOwnProperty('password')
  ) {
    throw new Error('netinkami duomenys');
  }

  if (typeof props?.username !== 'string' || !props?.username?.trim()) {
    throw new Error('username is required');
  }
  if (!props?.password?.trim()) {
    throw new Error('password is required');
  }

  if (props?.username?.length < 5) {
    throw new Error('username is too short');
  }
  if (props?.password?.length < 5) {
    throw new Error('password is too short');
  }

  if (props?.username?.length > 20) {
    throw new Error('username is too long');
  }
  if (props?.password?.length > 20) {
    throw new Error('password is too long');
  }

  if (!/^[a-zA-Z0-9]+$/.test(props?.username)) {
    throw new Error('username can only contain letters and numbers');
  }

  if (!/^[a-zA-Z0-9]+$/.test(props?.password)) {
    throw new Error('password can only contain letters and numbers');
  }
}

module.exports = { postUserValidation };
