import React, { useState} from 'react'
import * as styles from '../styles/acordation.module.css'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { FaMinus} from '@react-icons/all-files/fa/FaMinus'
import { CSSTransition } from 'react-transition-group'
export default function Acordation({ title, text }) {
    const [Active, setActive] = useState(false)
    const HandleClick = () => {
        setActive(Active ? false : true)
    }
    return (
        <div role="button" tabIndex="-1" className={styles.wrapper} onClick={HandleClick} onKeyDown={HandleClick}>
            <div className={styles.title_box}>
                {title}
                <button className={styles.btn}>{!Active ? <FaPlus/> : <FaMinus/>}</button>
            </div>
            
            <CSSTransition in={Active} timeout={300} unmountOnExit classNames="pop"><div>{text}</div></CSSTransition>
        </div>
    )
}
