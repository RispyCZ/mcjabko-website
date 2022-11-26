import React from "react"
import * as styles from "../styles/links.module.css"
import { Link } from "gatsby"

export default function Links({ items }) {
  return (
    <div className={styles.links}>
      {items.map(item => {
        const { url, icon, name } = item
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
