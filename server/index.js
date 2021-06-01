const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/schema');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`
    🚀  Server is running on ${url}!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
