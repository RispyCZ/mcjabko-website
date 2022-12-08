import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/donate.module.css"

export default function donate() {
  return (
    <Layout>
      <Seo title="Donate" lang="cs" />
      <div className={styles.top}>
        <h1>Sponzor je dočasně vypnutý</h1>
      </div>
      <div className={styles.content_wrapper}>
      
      </div>
    </Layout>
  )
}
