const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { loadSchema } = require('@graphql-tools/load');
const { addResolversToSchema } = require('@graphql-tools/schema');

loadSchema('./schemas/*.graphql', {
  loaders: [new GraphQLFileLoader()],
}).then((schema) => {
  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
  });

  const server = new ApolloServer({
    schema: schemaWithResolvers
  });
  server.listen().then(({ url }) => {
    console.log(`
    🚀  Server is running on ${url}!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
  });
});
