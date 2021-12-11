import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.module.css'
import Links from './Links'


export default function Navbar({ items }) {
    return (
        <div className={styles.nav}>
            <Link to="/"><img src="/logo.png" alt="" width="64" /></Link>
            <Links items={items} />
        </div>
    )
}
