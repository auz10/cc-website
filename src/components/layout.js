import React from "react";
import "./base.scss";
import Container from "./container";
import Navigation from "./navigation";
import { Link } from "gatsby";

class Template extends React.Component {
  render() {
    const { children, titleColor } = this.props;

    return (
      <Container>
        <div className="nav-bar-wrapper">
        <div className="nav-bar">
          <Link to={`/`}>
            <h1 className="header-title" style={{'--title': titleColor}}>
              Contraception Critical
            </h1>
          </Link>
          <Navigation />
        </div>
        </div>
        {children}
      </Container>
    );
  }
}

export default Template;
