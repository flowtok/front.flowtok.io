const { ApolloServer, gql } = require('apollo-server');

const resolvers = {
  Query: {
    users: () => [],
  },
};

const typeDefs = gql`
  type Query {
    "Get users array"
    users: [User]
  }
  type User {
    id: ID!
    name: String!
    tagname: String!
    age: Int!
    country: String!
    balance: Float!
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`
    🚀  Server is running on ${url}!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
