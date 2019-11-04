const { ApolloServer } = require('apollo-server-express');
const { ApolloGateway } = require('@apollo/gateway');
const express = require('express');

require('dotenv').config();

const { PORT } = process.env;

const serviceList = [
  { name: 'recipe', url: 'http://recipe_graphql:4001/' },
];

const getUser = token => {
  if (token !== 'Bearer test') return null;
  return {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com',
  }
}

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
      const user = getUser(token);
      if (!user) throw new Error('AuthenticationError: you must be logged in.');
      return { user };
    },
  });
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: PORT });
})();
