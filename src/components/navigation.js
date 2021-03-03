import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
    <li className={styles.navigationItem}>
        <Link to="/people">People</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">About</Link>
      </li>
    </ul>
  </nav>
)
