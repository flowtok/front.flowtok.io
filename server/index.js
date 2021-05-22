const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schemas/schema');

const resolvers = {
  Query: {
    users: () => [],
  },
};

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
