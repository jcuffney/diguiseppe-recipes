require('dotenv').config()

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const awsServerlessExpress = require('aws-serverless-express')
const R = require('ramda');

const { readFile, writeFile } = require('./lib/file');
const uuidv4 = require('uuid/v4');

const { NODE_ENV } = process.env;

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
      const recipes = readFile(DATA_PATH);
      const newRecipe = R.pipe(
        R.set(R.lensProp('id'), uuidv4()),
      )(R.prop('input', args));
      writeFile(DATA_PATH, R.append(newRecipe, recipes));
      return newRecipe;
    },
    deleteRecipe: (_, args) => {
      const id = R.path(['input', 'id'], args);
      const recipes = readFile(DATA_PATH);
      const upadtedRecipes = R.filter(R.propEq('id', id), recipes);
      writeFile(DATA_PATH, upadtedRecipes);
      return id;
    },
  },
};

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });


if (NODE_ENV === 'production') {
  const server = awsServerlessExpress.createServer(app)
  const handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
  module.exports = {
    handler,
  };
} else {
  app.listen({ port: 4000 });
}
