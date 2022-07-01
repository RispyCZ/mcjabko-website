import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import * as styles from '../styles/page.module.css'

export default function Not_Found() {
    return (
        <Layout>
            <div className={styles.error_page_wrapper}>
                <h1 style={{margin: '1.5rem'}}>Error 404</h1>
                <h2 style={{margin: '1.5rem'}}>Požadovaná stránka nexistuje :(</h2>
                <Link to="/" className={styles.btn}>Zpět domů</Link>
            </div>
        </Layout>
    )
}
