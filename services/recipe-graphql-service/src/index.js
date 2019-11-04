const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');
const express = require('express');

require('dotenv').config();

const { PORT } = process.env;

const app = express();

// const dataSources = require('./dataSources');
const resolvers = require('./resolvers');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  schema: buildFederatedSchema({
    typeDefs,
    resolvers,
  }),
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT });
