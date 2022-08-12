import React from 'react'

import CopyBtn from "./CopyIPBtn"
import * as styles from '@styles/hero.module.css'

const Hero = () => {
    return (
        <div className={styles.header_background}>
            <div className={styles.wrapper_1200}>
                <div className={styles.header}>
                    <div style={{ backgroundColor: '#ffffff1a', padding: '2rem', borderRadius: '20px', textAlign: 'center' }}>
                        <h1>MCJabko.cz</h1>
                        <h2>Vanilla Network</h2>
                        <CopyBtn CopyText={"mc.mcjabko.cz"}>mc.mcjabko.cz</CopyBtn>
                    </div>
                    <img src="https://cdn.mcjabko.cz/images/apple.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero