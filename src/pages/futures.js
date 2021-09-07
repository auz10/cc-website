import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import "./blog.scss";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class FuturesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulArticle.edges");
    console.log("posts", posts);
    const color = "#c31706";
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title dark" data-title="Futures">
              Futures
            </h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview
                      article={node}
                      bgColor={color}
                      dark={true}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default FuturesIndex;

export const pageQuery = graphql`
  query FuturesIndexQuery {
    allContentfulArticle(
      sort: { fields: [publishDate], order: DESC }
      filter: { category: { eq: "Futures" } }
    ) {
      edges {
        node {
          title
          category
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
