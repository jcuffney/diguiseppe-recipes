import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://graphql:4000',
});
