const path = require('path');
const get = require('lodash/get');

module.exports = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allContentfulComponentImage(limit: 1) {
        nodes {
          id
        }
      }
    }
  `);

  const image = get(result, 'data.allContentfulComponentImage.nodes', [])[0];

  if (image) {
    createPage({
      path: '/image',
      component: path.resolve('./src/components/Image/index.js'),
      context: image,
    });
  } else {
    console.error('no images found!', JSON.stringify(result, null, 2));
  }
};
