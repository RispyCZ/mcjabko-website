import React from "react"
import faqs from "../static-data/Faqs"
import Acordation from "./Acordation"
import { v4 as uuidv4 } from "uuid"

export default function ListFaqs() {
  return (
    <>
      {faqs.map(item => {
        const { Question, Answer } = item
        return <Acordation key={uuidv4()} title={Question} text={Answer} />
      })}
    </>
  )
}
