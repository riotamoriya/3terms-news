import React, { useState, useEffect } from 'react';

import { graphql } from "gatsby"
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { replace3dots, formatTime, cutNhkInfo } from '../helpers/functions';

import { LocalStorageCRUD } from '../helpers/localStorage';

import * as styles from './index.module.scss';


const IndexPage = ({ data }) => {
  const [previous_strage_ary, setPrevious_strage_ary] = useState([]);

  useEffect(() => {
    const storage = new LocalStorageCRUD();

    const decodeData = async () => {
      // 1. fetch strage data
      const decode_previous_value = await JSON.parse(storage.getItem());
      const decode_previous_value_dev = await
        process.env.NODE_ENV === 'development' 
          ? ( decode_previous_value ? decode_previous_value.slice(2) : [])
          : decode_previous_value || []
        ;
          

      await setPrevious_strage_ary(decode_previous_value_dev);
        // await console.log(`1. Previous Strage Value↓`);
        // await console.log(previous_strage_value);

      // 2. clear strage data
      await storage.removeItem();
        // await console.log(storage.getItem());

      // -1. save an array to strage
      const article_ids = await data.allArticleIds.nodes[0].ids;
      await storage.setItem(JSON.stringify(article_ids));
        // await console.log(storage.getItem());
    };

    decodeData();
  
  }, [data]);


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
            // const a_url = article.node.url;
            const a_id = article.node.id;

            const id_is_in_ary_flg = previous_strage_ary 
              ? previous_strage_ary.includes(a_id) : false;

            return (
              <div key={index} className={id_is_in_ary_flg && styles.specialBackground}>
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
  query FetchArticlesAndIds {
    allArticle {
      edges {
        node {
          id
          title
          description
          url
          publishedAt
        }
      }
    }
    allArticleIds {
      nodes {
        ids
      }
    }
  }

`;


export const Head = () => <Seo />

export default IndexPage