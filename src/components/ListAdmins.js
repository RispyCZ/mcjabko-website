import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
import Admin from './Admin'

export default function ListAdmins() {
    const admins = useStaticQuery(graphql`
    {
      allStrapiAdmins(sort: {order: ASC, fields: Order}) {
        nodes {
            Name
            Description
            Rank
            Order
          }
      }
    }
  `)

    return (
        <>
            {admins.allStrapiAdmins.nodes.map((item) => {
                const { Name, Description, Rank } = item
                return (
                    <Admin key={uuidv4()} Name={Name} Desc={Description} Rank={Rank} />
                )
            })}
        </>
    )
}
