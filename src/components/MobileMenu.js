import React from 'react'
import * as styles from '../styles/navbar.module.css'
import { Link } from 'gatsby'

export default function MobileMenu({ items }) {
    return (
        <div className={styles.mobile_menu}>
            {items.map((item) => {
                return <Link key={item.url} to={item.url}>{item.icon}</Link>
            })}
        </div>
    )
}
