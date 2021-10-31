import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Acordation from './Acordation'
import { v4 as uuidv4 } from 'uuid'

export default function ListFaqs() {
    const admins = useStaticQuery(graphql`
    {
      allStrapiFaq {
        nodes {
            Question
            Answer
          }
      }
    }
  `)
    return (
        <>
            {admins.allStrapiFaq.nodes.map((item) => {
                const { Question, Answer } = item
                return (
                    <Acordation key={uuidv4()} title={Question} text={Answer} />
                )
            })}
        </>
    )
}
