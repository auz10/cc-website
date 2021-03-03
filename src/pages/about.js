import React from "react";
// import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import TextBlock from "../components/text-block"

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    // const people = get(this, "props.data.allContentfulPerson.edges");
    const color = "#ffd5fb";
    return (
      <Layout location={this.props.location} titleColor={color}>
        <div style={{ background: color }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="title" data-title="About">
              About
            </h2>
            <TextBlock>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio non sapien posuere consequat at et ex. Nam quis volutpat mauris. Nulla at pellentesque velit. Sed diam magna, venenatis quis dolor at, sodales molestie tortor. In mauris velit, tristique sed odio vel, tincidunt venenatis tortor. Duis sagittis enim at tellus sodales molestie. Mauris placerat lorem erat, non efficitur leo commodo in. Nullam et tristique libero, sed fermentum neque. Proin in lacus euismod mauris lacinia faucibus eu interdum mauris.</p>
                <p>Nam at metus at ligula euismod aliquam sit amet vitae nunc. Donec tempus magna nec massa ullamcorper, ut cursus felis ultricies. Fusce auctor enim in posuere sodales. Fusce luctus vulputate sem, nec facilisis neque malesuada ac. Ut vehicula, risus id condimentum condimentum, nisl quam sagittis risus, non laoreet quam nulla et felis. Ut fringilla dignissim vulputate. Integer sit amet ex vitae ante pharetra rutrum. Fusce vehicula luctus nisi placerat luctus. Aenean vel condimentum nisl.</p>
                <p>Quisque at fringilla velit. Nulla quis lacus eget mauris rutrum viverra. Curabitur suscipit tellus sit amet pharetra ultricies. Maecenas viverra orci at ligula consequat pharetra. Etiam nec pharetra massa, sit amet interdum metus. Etiam non odio lectus. In hac habitasse platea dictumst. Nulla sagittis volutpat turpis, vel accumsan orci mollis et.</p>
                <p>Morbi enim augue, accumsan eu egestas eget, dignissim eu ante. In scelerisque dictum nulla, faucibus eleifend purus aliquam et. Phasellus purus libero, molestie quis ultrices sed, molestie et augue. Praesent consectetur leo aliquet sem hendrerit tincidunt. Morbi egestas lobortis felis, vitae commodo erat. Ut lobortis in erat ut gravida. Nullam quis lectus hendrerit, tristique elit vitae, accumsan libero. Nullam a dolor et orci sollicitudin molestie vel tempus eros. Praesent vestibulum, velit ac tristique congue, odio libero consequat justo, et ullamcorper felis mi in nisi. Nam cursus risus in posuere ullamcorper. Fusce consequat sollicitudin egestas. Cras libero mi, efficitur et tellus a, varius tincidunt ipsum. Quisque eu diam rutrum, vulputate nunc sed, porta ligula. Donec nibh nisi, elementum a feugiat in, lacinia ac neque.</p>
                <p>Quisque blandit justo id fermentum mattis. Quisque eget neque augue. Donec vestibulum, elit eu tincidunt egestas, libero metus tempus lacus, ut volutpat mauris odio non nisl. Vestibulum aliquam in sem at pellentesque. Suspendisse eleifend tempor ante sed tempus. Morbi venenatis condimentum quam, a semper massa pulvinar sed. Duis accumsan quis lorem ac euismod. Nullam vehicula libero tortor, sit amet aliquet est blandit non. Donec ut nunc vitae neque consequat volutpat id in ipsum. Nunc ut nisi vehicula, commodo est vitae, consequat urna. Duis faucibus nibh mattis, aliquet quam nec, dictum elit. Nulla ac eros fermentum, ultricies lectus eget, blandit eros. Nunc iaculis convallis tristique. Curabitur consequat non justo et ultricies. Aliquam felis nibh, tempor vitae eleifend in, hendrerit sed mauris.</p>
            </TextBlock>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutIndex;

// export const pageQuery = graphql`
//   query peopleIndexQuery {
//     allContentfulPerson(sort: {fields: id, order: DESC}) {
//       edges {
//         node {
//           id
//           name
//           title
//           twitter
//           shortBio {
//             shortBio
//           }
//           image {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//                 aspectRatio
//                 src
//                 srcSet
//                 sizes
//             }
//           }
//         }
//       }
//     }
//   }
// `;
