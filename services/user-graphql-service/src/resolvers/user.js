const uuidv4 = require('uuid/v4');
const R = require('ramda');
const { readFile, writeFile } = require('../lib/file');

const DATA_PATH = './src/data/users.json';

const getUser = (_, args) => {
  const id = R.prop('id', args);
  const users = readFile(DATA_PATH);
  return R.find(R.propEq('id', id), users);
};


const createUser = (_, args) => {
  const users = readFile(DATA_PATH);
  const newUser = R.pipe(
    R.set(R.lensProp('id'), uuidv4()),
  )(R.prop('input', args));
  writeFile(DATA_PATH, R.append(newUser, users));
  return newUser;
};

const deleteUser = (_, args) => {
  const id = R.path(['input', 'id'], args);
  const users = readFile(DATA_PATH);
  const updatedUsers = R.filter(R.propEq('id', id), users);
  writeFile(DATA_PATH, updatedUsers);
  return id;
};

module.exports = {
  getUser,
  createUser,
  deleteUser,
};
