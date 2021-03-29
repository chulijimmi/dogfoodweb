module.exports = {
  siteMetadata: {
    title: "dogfoodweb",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-C7D4DJ4HF1",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "AWSAppSync",
        // This is the field under which it's accessible
        fieldName: "awsappsync",
        // URL to query from
        url: `https://lhrwinbdr5gmhiw3wtu2gc7say.appsync-api.us-east-1.amazonaws.com/graphql`,
        headers: {
          "x-api-key": `da2-st736lxu4vcv3etzu7wnunbdzi`,
        },
        refetchInterval: 10,
      },
    },
  ],
};
