import ApolloClient, { InMemoryCache }  from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  request: (operation) => {
    const token = 'test';
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
