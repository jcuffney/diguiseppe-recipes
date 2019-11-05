import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.sass'

export default (props) => (
  <div className={styles.notFoundView}>
    <div>
      <h1 className={styles.title}>404</h1>
      <Link to='/' className={styles.linkHome}>Home</Link>
    </div>
  </div>
)
