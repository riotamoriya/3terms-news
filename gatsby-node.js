// gatsby-node.js
const axios = require('axios');
require('dotenv').config();

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const apiKey = process.env.NEWS_API_KEY;
  const url = 'https://newsapi.org/v2/top-headlines';
  const params = {
    q: 'nhk.or.jp',
    country: 'jp',
    pageSize: 20,
    apiKey: apiKey
  };

  try {
    const response = await axios.get(url, { params });

    const articleIds = []; // 記事IDを保存する配列

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
          contentDigest: createContentDigest(article),
        },
      };
    
      const node = Object.assign({}, article, nodeMeta);
      createNode(node);
    
      // ここでIDを配列に追加
      articleIds.push(nodeMeta.id);
    });
    
    // ここで記事IDの配列を含むノードを作成
    createNode({
      id: createNodeId('article-ids'),
      parent: null,
      children: [],
      ids: articleIds,
      internal: {
        type: 'ArticleIds',
        contentDigest: createContentDigest(articleIds),
      },
    });
    
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
