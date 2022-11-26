import React from "react"
import { v4 as uuidv4 } from "uuid"
import admins from "../static-data/Admins"
import Admin from "./Admin"

export default function ListAdmins() {
  return (
    <>
      {admins.map(item => {
        const { Name, Description, Rank } = item
        return (
          <Admin key={uuidv4()} Name={Name} Desc={Description} Rank={Rank} />
        )
      })}
    </>
  )
}
