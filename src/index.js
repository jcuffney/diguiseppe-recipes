require('dotenv').config()

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const awsServerlessExpress = require('aws-serverless-express')

const dataSources = require('./dataSources');
const resolvers = require('./resolvers');
const { typeDefs } = require('./schema');

const { NODE_ENV } = process.env;

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
