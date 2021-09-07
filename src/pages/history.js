import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import "./blog.scss";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class HistoryIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulArticle.edges");
    const color = "#f6c500";
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="History">
              History
            </h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} bgColor={color} />
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

export default HistoryIndex;

export const pageQuery = graphql`
  query HistoryIndexQuery {
    allContentfulArticle(
      sort: { fields: [publishDate], order: DESC }
      filter: { category: { eq: "History" } }
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
