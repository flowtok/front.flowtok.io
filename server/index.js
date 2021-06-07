const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { loadSchema } = require('@graphql-tools/load');
const { addResolversToSchema } = require('@graphql-tools/schema');
const httpHeadersPlugin = require('apollo-server-plugin-http-headers');

loadSchema('./schemas/*.graphql', {
  loaders: [new GraphQLFileLoader()],
}).then((schema) => {
  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
    plugins: [httpHeadersPlugin],
  });

  const server = new ApolloServer({
    schema: schemaWithResolvers,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      let isVerify = false;
      if (token) {
        isVerify = req.cookies['token'] === token;
      }
      return { isVerify, token, setCookies: [] };
    },
  });
  server.listen().then(({ url }) => {
    console.log(`
    🚀  Server is running on ${url}!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
  });
});
