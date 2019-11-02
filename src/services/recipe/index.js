const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

// const dataSources = require('./dataSources');
const resolvers = require('./resolvers');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  schema: buildFederatedSchema({
    typeDefs,
    resolvers,
  }),
});

server.listen({ port: 4001 });
