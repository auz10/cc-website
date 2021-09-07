import React from "react";
import { Link } from "gatsby";
import "./entrance.scss";
import { CgArrowRight } from "@react-icons/all-files/cg/CgArrowRight";

export default ({ data }) => (
  <div className="entrance">
    <Link to="/contracepters/" className="entrance__left">
      <div className="entrance__title" data-title="What is">
        What is
      </div>
      <div className="entrance__title" data-title="Contraception Critical?">
        Contraception Critical?
      </div>
    </Link>
    {/* <Link to="/contraceptees/" className="entrance__right">
        <div className="entrance__title" data-title="Contraceptees">Contraceptees</div>
    </Link> */}
    <div className="entrance__right">
      <Link to="/history/" className="entrance__option">
        <div className="entrance__title" data-title="History">
          History
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/papers/" className="entrance__option">
        <div className="entrance__title" data-title="Papers">
          Papers
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/futures/" className="entrance__option">
        <div className="entrance__title" data-title="Futures">
          Futures
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/vox-pops/" className="entrance__option">
        <div className="entrance__title" data-title="Vox pops">
          Vox pops
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/literacy/" className="entrance__option">
        <div className="entrance__title" data-title="Literacy">
          Literacy
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
    </div>
  </div>
);
