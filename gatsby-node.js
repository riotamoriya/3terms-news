// gatsby-node.js
const axios = require('axios');
const { createRemoteFileNode } = require('gatsby-source-filesystem');
require('dotenv').config();

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const apiKey = process.env.NEWS_API_KEY;
  const url = 'https://newsapi.org/v2/top-headlines';
  const params = {
    q: 'nhk.or.jp',
    country: 'jp',
    pageSize: 7,
    apiKey: apiKey
  };

  try {
    const response = await axios.get(url, { params });
    response.data.articles.forEach(article => {
      const nodeContent = JSON.stringify(article);
      const nodeMeta = {
        id: createNodeId(`article-${article.title}`),
        parent: null,
        children: [],
        internal: {
          type: `Article`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: createContentDigest(article)
        }
      };
      const node = Object.assign({}, article, nodeMeta);
      createNode(node);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
