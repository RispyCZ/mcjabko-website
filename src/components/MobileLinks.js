import React from 'react'
import * as styles from '../styles/navbar.module.css'
import { Link } from 'gatsby'
export default function MobileLinks({ items, toggle_menu }) {
    return (
        <div className={toggle_menu ? styles.mobile_menu_show : styles.mobile_menu_hide}>
            <div className={styles.mobile_links}>
                {items.map((item) => {
                    return <Link key={item.url} to={item.url}>{item.name}</Link>
                })}
            </div>
        </div>
    )
}
