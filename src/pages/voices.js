import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import VoiceBubble from "../components/voice-bubble";

class VoicesIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const voices = get(this, "props.data.allContentfulVoice.edges");
    const color = "#f6c500";
    console.log("events", voices);
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="Voices">
              Voices
            </h2>
            <div className="voice-list">
              {voices.map((voice) => (
                <VoiceBubble voice={voice.node} key={voice.id}/>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default VoicesIndex;

export const pageQuery = graphql`
  query voicesIndexQuery {
    allContentfulVoice {
      edges {
        node {
          id
          email
          name
          title
          createdAt
          question {
            id
            createdAt
            question
          }
          message {
            json
          }
        }
      }
    }
  }
`;
