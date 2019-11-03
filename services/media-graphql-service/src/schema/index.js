const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Media 
  type Media {
    id: ID!
    filename: String
    url: String
    type: String
  }

  # Media Input
  input MediaInput {
    title: String
  }

  input DeleteInput {
    id: ID!
  }

  # Queries
  extend type Query {
    media: [Media]
  }

  # Mutations
  extend type Mutation {
    uploadMedia(input: MediaInput): String
    deleteMedia(input: DeleteInput): String
  }
`;

module.exports = {
  typeDefs,
};
