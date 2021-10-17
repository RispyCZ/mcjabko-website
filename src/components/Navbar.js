import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <h3>MCJabko.cz</h3>
            <div className={styles.links}>
                <Link to="/about">O nás</Link>
                <Link to="/rules">Pravidla</Link>
                <Link to="/ateam">Admin Team</Link>
            </div>
        </div>
    )
}
