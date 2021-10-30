import React, { useState } from 'react'
import ShowRank from './ShowRank'
import Modal from './Modal'
import * as styles from '../styles/list-admins.module.css'

export default function Admin({ Name, Rank, Desc }) {
    const [Active, setActive] = useState(false)
    const HandleClick = () => {
        setActive(Active ? false : true)
    }
    return (
        <div onClick={HandleClick} className={styles.col} key={Name}>
            <img src={"/admins/" + Name + ".png"} alt="" />
            <h4>{Name}</h4>
            <ShowRank rank={Rank} />
            <Modal active={Active} title={Name} text={Desc} />
        </div>
    )
}
