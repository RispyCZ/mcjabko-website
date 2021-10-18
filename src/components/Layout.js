import React from 'react'
import * as styles from '../styles/layout.module.css'
import '../styles/global.css'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import items from '../static-data/NavItems'

export default function Layout({ children }) {
    return (
        <>
            <Navbar items={items} />
            <div className={styles.wrapper}>
                {children}
            </div>
            <MobileMenu items={items} />
            <Footer/>
        </>
    )
}
