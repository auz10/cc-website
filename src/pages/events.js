import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Event from "../components/event";

class EventsIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const events = get(this, "props.data.allContentfulEvent.edges");
    const color = "#017291";
    console.log('events', events)
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="Events">
              Events
            </h2>     
            <div className="event-list">
              {events.map(({ node }) => {
                return (
                  <Event event={node} key={node.id}/>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default EventsIndex;

export const pageQuery = graphql`
  query eventsIndexQuery {
    allContentfulEvent {
        edges {
          node {
            id
            name
            location
            date(formatString: "DD/MM/YYYY")
            description {
              id
              content {
                content {
                  value
                }
              }
            }
          }
        }
      }
  }
`;
