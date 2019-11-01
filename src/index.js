const { ApolloServer, gql } = require('apollo-server');
const { readFile, writeFile, uuid } = require('./lib');
const R = require('ramda');

const typeDefs = gql`
  # Recipe
  type Recipe {
    id: ID!
    title: String
  }

  # Recipe Input
  input RecipeInput {
    title: String
  }

  input DeleteInput {
    id: ID!
  }

  # Queries
  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }

  # Mutations
  type Mutation {
    createRecipe(input: RecipeInput): Recipe
    deleteRecipe(input: DeleteInput): String
  }
`;

const DATA_PATH = './data/recipes.json';

const resolvers = {
  Query: {
    recipes: () => readFile(DATA_PATH),
    recipe: (_, args) => {
      const id = R.prop('id', args);
      const recipes = readFile(DATA_PATH);
      return R.find(R.propEq('id', id), recipes);
    },
  },
  Mutation: {
    createRecipe: (_, args) => {
      console.log('creating recipe', args);
      const recipes = readFile(DATA_PATH);
      const newRecipe = R.pipe(
        R.set(R.lensProp('id'), uuid())
      )(R.prop('input', args));
      writeFile(DATA_PATH, R.append(newRecipe, recipes));
      return newRecipe;
    },
    deleteRecipe: (_, args) => {
      const id = R.path(['input', 'id'], args)
      console.log('deleting recipe', id)
      const recipes = readFile(DATA_PATH);
      const upadtedRecipes = R.filter(R.propEq('id', id), recipes);
      console.log(recipes, upadtedRecipes);
      writeFile(DATA_PATH, upadtedRecipes);
      return id;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen()
  .then(({ url }) => {
    console.log(`Server ready at ${ url }`);
  });
