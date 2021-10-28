import React from 'react'
import * as styles from '../styles/showrank.module.css'
export default function Rank({rank}) {
    switch(rank)
    {
        case 'majitel':
            return <span className={styles.majitel}>Majitel</span>
        case 'spolumajitel':
            return <span className={styles.spolumajitel}>Spolumajitel</span>
        case 'hladmin':
            return <span className={styles.hladmin}>Hlavní admin</span>
        case 'admin':
            return <span className={styles.admin}>Admin</span>
        case 'support':
            return <span className={styles.support}>Support</span>
        case 'zksupport':
            return <span className={styles.support}>Support</span>
        case 'technik':
            return <span className={styles.technik}>Technik</span>
        case 'builder':
            return <span className={styles.builder}>Builder</span>
        default:
            return <span></span>
    }
}
