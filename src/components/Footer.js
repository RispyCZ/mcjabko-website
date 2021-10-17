import React from 'react'
import *  as styles from '../styles/footer.module.css'
import { ImFacebook2 } from '@react-icons/all-files/im/ImFacebook2'
import { ImInstagram } from '@react-icons/all-files/im/ImInstagram'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a role="button" aria-label="facebook" href="https://fb.com/mcjabko" target="_blank" rel="noreferrer"><ImFacebook2/></a>
                <a role="button" aria-label="instagram" href="https://instagram.com/mcjabko" target="_blank" rel="noreferrer" ><ImInstagram/></a>
            </div>
            <p>&copy; MCJabko.cz {new Date().getFullYear()}</p>
        </div>
    )
}
