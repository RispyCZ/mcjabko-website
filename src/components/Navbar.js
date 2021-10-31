import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import * as styles from '../styles/navbar.module.css'
import Links from './Links'


export default function Navbar({ items }) {
    /*const [ColorBlack, setColorBlack] = useState(false)
    const HandleColorChange = () => {
        if (window.scrollY >= 80) {
            setColorBlack(true)
        } else {
            setColorBlack(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', HandleColorChange)
        style={{backgroundColor: ColorBlack ? '#121212' : 'transparent'}}
    })/*/
    return (
        <div className={styles.nav}>
            <Link to="/"><img src="/logo2020.svg" alt="" width="64" /></Link>
            <Links items={items} />
        </div>
    )
}
