import React from 'react'
import * as styles from '../styles/navbar.module.css'
import Links from './Links'


export default function Navbar({ items }) {

    return (
        <div className={styles.nav}>
            <h3>MCJabko.cz</h3>
            <Links items={items} />
        </div>
    )
}
