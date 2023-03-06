import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/navbar.module.css"
import Links from "./Links"
import MobileDropDown from "./MobileDropDown"

export default function Navbar({ items }) {
  return (
    <div className={styles.nav}>
      <div style={{ flex: "1 1 0%" }}>
        <Link to="/">
          <img src="/logo.png" alt="" width="64" />
        </Link>
      </div>
      <div style={{ flex: "1 1 0%", display: "flex", justifyContent: 'end' }}>
        <Links items={items} />
        <MobileDropDown items={items} />
      </div>
    </div>
  )
}
