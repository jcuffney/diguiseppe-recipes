require('dotenv').config()

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const awsServerlessExpress = require('aws-serverless-express')

const dataSources = require('./dataSources');
const resolvers = require('./resolvers');

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

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
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
