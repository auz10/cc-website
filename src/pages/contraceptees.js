import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import "./blog.scss";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class ContracepteesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    console.log('posts', posts)
    const color = "#f9c7b3";
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="Contraceptees">
              Contraceptees
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

export default ContracepteesIndex;

export const pageQuery = graphql`
  query ContracepteesIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
