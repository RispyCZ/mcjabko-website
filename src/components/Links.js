import React from 'react'
import * as styles from '../styles/navbar.module.css'
import { Link } from 'gatsby'

export default function Links({ items }) {
    return (
        <div className={styles.links}>
        {items.map((item) => {
            return <Link key={item.url} to={item.url}>{item.icon} {item.name}</Link>
        })}
        </div>
    )
}
