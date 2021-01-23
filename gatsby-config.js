module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
     "gatsby-plugin-typescript",
     {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GETLOLLY",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "getlolly",
        // Url to query from
        url: "https://virtual-lolly-app.netlify.app/.netlify/functions/GraphQL",
      },
    },
  ],
}
