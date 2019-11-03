const uuidv4 = require('uuid/v4');
const R = require('ramda');
const { readFile, writeFile } = require('../lib/file');

const DATA_PATH = './src/data/recipes.json';

const getRecipe = (_, args) => {
  const id = R.prop('id', args);
  const recipes = readFile(DATA_PATH);
  return R.find(R.propEq('id', id), recipes);
};

const getRecipes = () => readFile(DATA_PATH);

const createRecipe = (_, args) => {
  const recipes = readFile(DATA_PATH);
  const newRecipe = R.pipe(
    R.set(R.lensProp('id'), uuidv4()),
  )(R.prop('input', args));
  writeFile(DATA_PATH, R.append(newRecipe, recipes));
  return newRecipe;
};

const deleteRecipe = (_, args) => {
  const id = R.path(['input', 'id'], args);
  const recipes = readFile(DATA_PATH);
  const upadtedRecipes = R.filter(R.propEq('id', id), recipes);
  writeFile(DATA_PATH, upadtedRecipes);
  return id;
};

module.exports = {
  getRecipe,
  getRecipes,
  createRecipe,
  deleteRecipe,
};
