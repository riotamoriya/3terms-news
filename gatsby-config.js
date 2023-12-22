/**
 * @type {import('gatsby').GatsbyConfig}
 */


require('dotenv').config();

module.exports = {
  // siteMetadata:= サイト全体で使用するメタデータを定義するために使われます。
  // サイトのタイトル、説明、著者などの一般的な情報を含むことが多いです。GraphQLクエリを通じてサイトのどこからでもアクセスできます。
  siteMetadata: {
    title: `ミミズク-テント`,
    description: `We are delivering simple news every hours.`,
    image: `assets/brand.png`,
    siteUrl: `https://d1dbsbht6shkxg.cloudfront.net/`,
    type: `website`,
    keywords: `ミミズク-テント, mimizuku-tent, 3terms-news`, 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ミミズク-テント`,
        short_name: `ミミズク-テント`,
        description: `ニュースをシンプルに一時間おきに配信！！`,
        lang: `ja`,
        display: `browser`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        icon: 'src/assets/brand.png',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,　// 追加
      options: {
        siteUrl: `https://d1dbsbht6shkxg.cloudfront.net/`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt', // 追加
      options: {
        host: 'https://d1dbsbht6shkxg.cloudfront.net/',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-TCBFERPWC2"],  // 控えておいた、測定IDを記載します。
        pluginConfig: {
          head: true  // headタグに記載されるようにコンフィグを設定します。
        }
      }
    },
    
    "gatsby-plugin-sass",
    {
      // gatsby-plugin-s3:= aws s3デプロイプラグイン
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_S3_BUCKET,
        acl: null
      },
    },
  ]
};