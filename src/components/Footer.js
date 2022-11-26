import React from 'react'
import *  as styles from '../styles/footer.module.css'
import { FacebookLogo, YoutubeLogo, InstagramLogo } from 'phosphor-react'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a role="button" aria-label="facebook" href="https://fb.com/mcjabko" target="_blank" rel="noreferrer"><FacebookLogo size={32} color="#f66151" weight="duotone" /></a>
                <a role="button" aria-label="instagram" href="https://instagram.com/mcjabko" target="_blank" rel="noreferrer" ><InstagramLogo size={32} color="#f66151" weight="duotone" /></a>
                <a role="button" aria-label="youtoube" href="https://youtoube.com" target="_blank" rel="noreferrer" ><YoutubeLogo size={32} color="#f66151" weight="duotone" /></a>
            </div>
            <p>&copy; MCJabko.cz {new Date().getFullYear()}</p>
            <span className={styles.version}>Version: 1.0-prod</span>
        </div>
    )
}
