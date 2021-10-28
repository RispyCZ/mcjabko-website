import React from 'react'
import Layout from '../components/Layout'
import ListFaqs from '../components/ListFaqs'
import Seo from '../components/Seo'
import * as styles from '../styles/faq.module.css'

export default function faq() {
    return (
        <Layout>
            <Seo lang="cs" title="FAQ" />
            <div className={styles.top}>
                <h1>FAQ</h1>
            </div>
            <div className={styles.faq_wrapper}>
                <div className={styles.faqs}>
                    <ListFaqs/>
                </div>
            </div>
        </Layout>
    )
}
