const { ApolloServer } = require('apollo-server-express');
const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');

require('dotenv').config();

const { PORT } = process.env;

const serviceList = [
  { name: 'recipe', url: 'http://recipe_graphql:4001/' },
];

(async () => {
  const app = express();
  const gateway = new ApolloGateway({ serviceList });
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({
    schema,
    executor,
    introspection: true,
    playground: true,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      console.log(token);
      const user = {};
      return { user };
    },
  });
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ port: PORT });
})();
