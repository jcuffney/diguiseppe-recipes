const uuidv4 = require('uuid/v4');
const R = require('ramda');

const getRecipe = () => {};

const getRecipes = () => [];

const createRecipe = (_, args) => {
  const newRecipe = R.pipe(
    R.set(R.lensProp('id'), uuidv4()),
  )(R.prop('input', args));
  return newRecipe;
};

const deleteRecipe = (_, args) => {
  const id = R.path(['input', 'id'], args);
  return id;
};

module.exports = {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
};
