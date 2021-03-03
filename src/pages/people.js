import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import PersonPreview from "../components/person-preview";

class ContraceptersIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const people = get(this, "props.data.allContentfulPerson.edges");
    const color = "#fff6d5";
    console.log("people", people);
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="People">
              People
            </h2>
            <ul className="people-list">
              {people.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <PersonPreview person={node} />
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

export default ContraceptersIndex;

export const pageQuery = graphql`
  query peopleIndexQuery {
    allContentfulPerson(sort: {fields: id, order: DESC}) {
      edges {
        node {
          id
          name
          title
          twitter
          shortBio {
            shortBio
          }
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
