import React, { useState } from 'react'
import * as styles from '../styles/acordation.module.css'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaMinus} from '@react-icons/all-files/fa/FaMinus'
export default function Acordation({ title, text }) {
    const [Active, setActive] = useState(false)
    const HandleClick = () => {
        setActive(Active ? false : true)
    }
    return (
        <div className={styles.wrapper} onClick={HandleClick}>
            <div className={styles.title_box}>
                {title}
                <button className={styles.btn}>{!Active ? <FaPlus/> : <FaMinus/>}</button>
            </div>
            {Active ? <div>{text}</div> : ''}
        </div>
    )
}
