const uuidv4 = require('uuid/v4');
const R = require('ramda');

const getUser = () => {};

const createUser = (_, args) => {
  const newUser = R.pipe(
    R.set(R.lensProp('id'), uuidv4()),
  )(R.prop('input', args));
  return newUser;
};

const deleteUser = (_, args) => {
  const id = R.path(['input', 'id'], args);
  return id;
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
};
