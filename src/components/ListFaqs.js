import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Acordation from './Acordation'

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
                    <Acordation title={Question} text={Answer} />
                )
            })}
        </>
    )
}
