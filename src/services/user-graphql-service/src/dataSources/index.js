const { RESTDataSource } = require('apollo-datasource-rest');

class RecipeService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }
}

module.exports = () => ({
  recipeService: new RecipeService(),
});
