import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://graphql:4000',
});