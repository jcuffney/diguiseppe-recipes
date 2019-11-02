const { ApolloServer } = require('apollo-server-express');
const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');

require('dotenv').config();

const { PORT } = process.env;

const app = express();

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'recipe', url: 'http://localhost:4001/graphql' },
    { name: 'user', url: 'http://localhost:4002/graphql' },
  ],
});

(async () => {
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({ schema, executor });
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ port: PORT });
})();
