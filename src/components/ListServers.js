import React from 'react'
import * as styles from '../styles/list-servers.module.css'
import { useStaticQuery, graphql } from "gatsby"
import { GiServerRack } from '@react-icons/all-files/gi/GiServerRack'

export default function ListServers() {
    const servers = useStaticQuery(graphql`
    {
      allStrapiServers {
        nodes {
          CPU
          Disk
          Location
          Name
          RAM
          Usage
        }
      }
    }
  `)
    return (
        <>
            {servers.allStrapiServers.nodes.map((item) => {
                const { CPU, Disk, RAM, Location, Name, Usage } = item
                return (
                    <div className={styles.col} key={Name}>
                        <span className={styles.icon}><GiServerRack /></span>
                        <h4>{Name}</h4>
                        <ul className={styles.list}>
                            <li>CPU: {CPU}</li>
                            <li>RAM {RAM}</li>
                            <li>Disk {Disk}</li>
                            <li>Využití: {Usage}</li>
                            <li>Lokace: {Location}</li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}
