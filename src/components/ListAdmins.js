import React, {useState} from 'react'
import * as styles from '../styles/list-admins.module.css'
import { useStaticQuery, graphql } from "gatsby"

import Admin from './Admin'

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
                const { Name, Description, Rank } = item
                return (
                    <Admin Name={Name} Desc={Description} Rank={Rank} />
                )
            })}
        </>
    )
}
