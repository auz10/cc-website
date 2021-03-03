import React from "react";
import Img from "gatsby-image";

import "./person-preview.scss";

export default ({ person }) => (
  <div className="person-preview">
    {person.image && (
      <Img alt="" fluid={person.image.fluid} className="person-img-wrapper" />
    )}
    <h3 className="personTitle" data-title={person.name}>
      {person.name}
    </h3>
    <small className="short-bio">
      {person.shortBio.shortBio}
    </small>
    {/* <small className="tag">TAG</small>
    {/* <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    /> */}
  </div>
);
