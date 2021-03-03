import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import './blog.scss'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class ContraceptersIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const color = "#c1e9f9";
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="Contracepters">Contracepters</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} bgColor={color} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContraceptersIndex

export const pageQuery = graphql`
  query ContraceptersIndexQuery {
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
`
