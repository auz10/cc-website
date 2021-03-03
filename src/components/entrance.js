import React from "react";
import { Link } from 'gatsby'
import "./entrance.scss";

export default ({ data }) => (
  <div className="entrance">
    <Link to="/contracepters/" className="entrance__left">
        <div className="entrance__title" data-title="Contracepters">Contracepters</div>
    </Link>
    <Link to="/contraceptees/" className="entrance__right">
        <div className="entrance__title" data-title="Contraceptees">Contraceptees</div>
    </Link>
  </div>
);
