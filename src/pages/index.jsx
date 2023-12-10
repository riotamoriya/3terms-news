import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { replace3dots, formatTime, cutNhkInfo } from '../helpers/functions';

import * as styles from './index.module.scss';

const IndexPage = ({ data }) => {
  const latest_articles = data.allArticle.edges || null;

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.space1} />

        <div className={styles.articleContainer}>
          {latest_articles.map((article, index) => {

            const a_title = cutNhkInfo(article.node.title);
            const a_description = replace3dots(article.node.description);
            const a_publishedAt = formatTime(article.node.publishedAt);

            const a_url = article.node.url;

            return (
              <div key={index}>
                <h2 className={styles.title}>
                  {a_title}
                </h2>
                <h5 className={styles.publishedAt}>
                  {a_publishedAt}
                </h5>
                <p className={styles.contents}>
                  {a_description}
                  <span className={styles.next}>
                    Δ記事終∇
                  </span>
                  {/* <a href={a_url} target="_blank" rel="noopener noreferrer" className={styles.next}>
                    Δ記事続き∇
                  </a> */}

                </p>
              </div>
            )
          })}
        </div>
        <div className={styles.space2} />
      </main>
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allArticle {
      edges {
        node {
          title
          description
          url
          publishedAt
        }
      }
    }
  }
`;


export const Head = () => <Seo />

export default IndexPage