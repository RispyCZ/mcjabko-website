import React from "react"
import Layout from "../components/Layout"
import ListFaqs from "../components/ListFaqs"
import Seo from "../components/Seo"
import * as styles from "../styles/page.module.css"

export default function faq() {
  return (
    <Layout>
      <Seo lang="cs" title="FAQ" />
      <div className={styles.top}>
        <h1>FAQ</h1>
        <h2>
          Nevíš si s něčím rady? Tak tady možná najdeš odpověď, pokud ne, tak se
          nás neboj kontaktovat!
        </h2>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.faqs}>
          <ListFaqs />
        </div>
      </div>
    </Layout>
  )
}
