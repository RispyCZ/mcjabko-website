import React from 'react'
import * as styles from '../styles/list-admins.module.css'
import { useStaticQuery, graphql } from "gatsby"
import ShowRank from './ShowRank'

export default function ListAdmins() {
    const admins = useStaticQuery(graphql`
    {
      allStrapiAdmins {
        nodes {
            Name
            Description
            Rank
          }
      }
    }
  `)
    return (
        <>
            {admins.allStrapiAdmins.nodes.map((item) => {
                const { Name, Rank } = item
                return (
                    <div className={styles.col} key={Name}>
                        <img src={"/admins/"+ Name + ".png"} alt="" />
                        <h4>{Name}</h4>
                        <ShowRank rank={Rank}/>
                    </div>
                )
            })}
        </>
    )
}
