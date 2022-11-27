import React from "react"
import * as styles from "../styles/layout.module.css"
import "../styles/global.css"
import "../styles/transitions.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import items from "../static-data/NavItems"
import { HelmetProvider } from "react-helmet-async"

export default function Layout({ children }) {
  return (
    <HelmetProvider>
      <Navbar items={items} />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </HelmetProvider>
  )
}
