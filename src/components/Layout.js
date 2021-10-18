import React from 'react'
import * as styles from '../styles/layout.module.css'
import '../styles/global.css'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import items from '../static-data/NavItems'
import Seo from './Seo'

export default function Layout({ children }) {
    return (
        <>
            <Seo description="Offical website of MCJabko.cz" lang="cs" title="Domů" />
            <Navbar items={items} />
            <div className={styles.wrapper}>
                {children}
            </div>
            <MobileMenu items={items} />
            <Footer/>
        </>
    )
}
