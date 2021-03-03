import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "./article-preview.scss";

export default ({ article, bgColor }) => (
  <Link to={`/blog/${article.slug}`} className="preview">
    <Img alt="" fluid={article.heroImage.fluid} className="preview-img-wrapper"/>
    <h3 className="previewTitle" data-title={article.title}>
      {article.title}
    </h3>
    <small className="date" style={{ backgroundColor: bgColor }}>
      {article.publishDate}
    </small>
    {/* <small className="tag">TAG</small> */}
    {/* <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    /> */}
  </Link>
);
