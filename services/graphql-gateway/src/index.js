const { ApolloServer } = require('apollo-server-express');
const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');

const serviceList = [
  { name: 'recipe', url: 'http://recipe_graphql:4001/' },
];

(async () => {
  const app = express();
  const gateway = new ApolloGateway({ serviceList });
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({ schema, executor, introspection: true, playground: true });
  server.applyMiddleware({ app, path: '/' });
  app.listen({ port: 4000 });
})();
