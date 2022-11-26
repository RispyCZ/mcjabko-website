import React from "react"
import * as styles from "../styles/mobile-menu.module.css"
import { Link } from "gatsby"

export default function MobileMenu({ items }) {
  return (
    <div className={styles.mobile_menu}>
      {items.map(item => {
        const { name, url, icon } = item
        if (url.startsWith("https://")) {
          return (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              {icon} {name}
            </a>
          )
        } else {
          return (
            <Link key={name} to={url}>
              {icon} {name}
            </Link>
          )
        }
      })}
    </div>
  )
}
