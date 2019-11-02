const {
    getRecipe,
    getRecipes,
    createRecipe,
    deleteRecipe,
} = require('./recipe');

module.exports = {
    Query: {
        recipe: getRecipe,
        recipes: getRecipes,
    },
    Mutation: {
        createRecipe,
        deleteRecipe,
    },
};