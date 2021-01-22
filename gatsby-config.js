require('dotenv').config();

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
  accessToken: process.env.CONTENTFUL_CDA_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
};
