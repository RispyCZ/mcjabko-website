import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.module.css'
import { HiMenuAlt3 } from '@react-icons/all-files/hi/HiMenuAlt3'
export default function Navbar() {
    return (
        <div className={styles.nav}>
            <h3>MCJabko.cz</h3>
            <div className={styles.links}>
                <Link to="/about">O nás</Link>
                <Link to="/rules">Pravidla</Link>
                <Link to="/ateam">Admin Team</Link>
            </div>
            <a href="#" className={styles.menu_btn}><HiMenuAlt3/></a>
        </div>
    )
}
