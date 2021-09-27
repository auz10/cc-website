import React from "react";
import { Link } from "gatsby";
import "./entrance.scss";
import { CgArrowRight } from "@react-icons/all-files/cg/CgArrowRight";

export default ({ data }) => (
  <div className="entrance">
    <div className="entrance__left">
      <div className="entrance__left__top">
        <div className="entrance__title" data-title="Contraception Critical">
          Contraception Critical
        </div>
        <div className="entrance__title" data-title="For You">
          For You
        </div>
      </div>
      <div className="entrance__left__bottom">
      <Link to="/people/" className="entrance__option">
        <div className="entrance__title" data-title="Voices">Voices</div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/people/" className="entrance__option">
        <div className="entrance__title" data-title="Have Your Say">Have Your Say</div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div></Link>
      </div>
    </div>
    <div className="entrance__right">
      <Link to="/people/" className="entrance__option">
        <div className="entrance__title" data-title="Who">
          Who
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/history/" className="entrance__option">
        <div className="entrance__title" data-title="What">
          What
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/vox-pops/" className="entrance__option">
        <div className="entrance__title" data-title="How">
          How
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/futures/" className="entrance__option">
        <div className="entrance__title" data-title="Why">
          Why
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
      <Link to="/events/" className="entrance__option">
        <div className="entrance__title" data-title="Where">
          Where
        </div>
        <div class="entrance__icon">
          <CgArrowRight class="entrance__icon--first" />
          <CgArrowRight class="entrance__icon--last" />
        </div>
      </Link>
    </div>
  </div>
);
