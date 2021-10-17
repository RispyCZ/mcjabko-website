import React from 'react'
import * as styles from '../styles/layout.module.css'
import '../styles/global.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            <div className={styles.wrapper}>
                {children}
            </div>
            <Footer/>
        </>
    )
}
