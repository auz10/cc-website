import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/people">Who Are We?</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about">Events</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about">Archive</Link>
      </li>
    </ul>
  </nav>
);
