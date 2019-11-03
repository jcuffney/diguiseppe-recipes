const {
  getUser,
  createUser,
  deleteUser,
} = require('./user');

module.exports = {
  Query: {
    user: getUser,
  },
  Mutation: {
    createUser,
    deleteUser,
  },
};
