const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { loadSchema } = require('@graphql-tools/load');

loadSchema('./schemas/*.graphql', {
  // load from multiple files using glob
  loaders: [new GraphQLFileLoader()],
}).then((schema) => {
  const server = new ApolloServer({
    resolvers,
    schema,
  });

  server.listen().then(({ url }) => {
    console.log(`
    🚀  Server is running on ${url}!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
  });
});




