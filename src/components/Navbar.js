import React, {useState} from 'react'
import * as styles from '../styles/navbar.module.css'
import { HiMenuAlt3 } from '@react-icons/all-files/hi/HiMenuAlt3'
import Links from './Links'
import MobileLinks from './MobileLinks'

export default function Navbar({ items }) {
    const [MenuToggle, setMenuToggle] = useState(false)
    const HandleMenuToggle = () => {
        if(MenuToggle)
        {
            setMenuToggle(false)
        } else {
            setMenuToggle(true)
        }
    }
    return (
        <div className={styles.nav}>
            <h3>MCJabko.cz</h3>
            <Links items={items} />
            <MobileLinks toggle_menu={MenuToggle} items={items} />
            <a role="button" onClick={() => HandleMenuToggle()} aria-label="menu-btn" className={styles.menu_btn}><HiMenuAlt3/></a>
        </div>
    )
}
