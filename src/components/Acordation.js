import React, { useState} from 'react'
import * as styles from '../styles/acordation.module.css'
import { Plus, Minus } from 'phosphor-react'
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
                <button className={styles.btn}>{!Active ? <Plus size={32} color="#f66151" weight="bold" /> : <Minus size={32} color="#f66151" weight="bold" />}</button>
            </div>
            
            <CSSTransition in={Active} timeout={300} unmountOnExit classNames="pop"><div>{text}</div></CSSTransition>
        </div>
    )
}
