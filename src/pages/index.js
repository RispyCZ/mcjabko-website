import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GiServerRack } from '@react-icons/all-files/gi/GiServerRack'
import { GiRingedPlanet } from '@react-icons/all-files/gi/GiRingedPlanet'
import { FaUserSecret } from '@react-icons/all-files/fa/FaUserSecret'
export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div className={styles.header}>
        <div>
          <h1>MCJabko.cz</h1>
          <h2>Vanilla Network</h2>
        </div>
        <img src="/apple.png" alt="" />
      </div>

      {/* Why us? */}
      <div className={styles.top}>
        <h3>Tři důvody proč vybrat zrovna náš server?</h3>
      </div>
      <div className={styles.cols}>
        <div className={styles.col}>
          <span className={styles.icon}><GiServerRack /></span>
          <h3>Zázemní</h3>
          <p>Všechny naše herní servey jsou provozováný na naších vlastních serverech v ČR</p>
        </div>
        <div className={styles.col}>
          <span className={styles.icon}><FaUserSecret /></span>
          <h3>Admin Team</h3>
          <p>Admini rádi pomohou s řešením tvých problém ať už na serveru nebo na discordu</p>
        </div>
        <div className={styles.col}>
          <span className={styles.icon}><GiRingedPlanet /></span>
          <h3>Máš na výběr</h3>
          <p>Ačkoliv nabízíme jen servery zaměřené na Vanillu můžeš si vybrat.</p>
        </div>
      </div>

      { /* Worlds */}
      <div className={styles.worlds_wrapper}>
        <div className={styles.top}>
          <h3>Vyber si svět, který ti bude sedět</h3>
        </div>
        <div className={styles.cols}>
          <div className={styles.col}>
            <span className={styles.icon}>🟢</span>
            <h3>Zelený svět</h3>
            <p>Charakteristika světa</p>
            <ul className={styles.list}>
              <li className={styles.list_item}>Semi-Vanilla</li>
              <li className={styles.list_item}>Aktivní admin team</li>
              <li className={styles.list_item}>Základní přikazy (/home,/tpa atd.)</li>
              <li className={styles.list_item}>Neomezená mapa</li>
            </ul>
          </div>
          <div className={styles.col}>
            <span className={styles.icon}>🟣</span>
            <h3>Fialový svět</h3>
            <p>Charakteristika světa</p>
            <ul className={styles.list}>
              <li className={styles.list_item}>Semi-Vanilla</li>
              <li className={styles.list_item}>Aktivní admin team</li>
              <li className={styles.list_item}>Základní přikazy (/home,/tpa atd.)</li>
              <li className={styles.list_item}>Neomezená mapa</li>
            </ul>
          </div>
          <div className={styles.col}>
            <span className={styles.icon}>🔴</span>
            <h3>Červený svět</h3>
            <p>Charakteristika světa</p>
            <ul className={styles.list}>
              <li className={styles.list_item}>Semi-Vanilla</li>
              <li className={styles.list_item}>Aktivní admin team</li>
              <li className={styles.list_item}>Základní přikazy (/home,/tpa atd.)</li>
              <li className={styles.list_item}>Neomezená mapa</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Discord */}
      <div className={styles.discord_box}>
        <div className={styles.discord_text}>
          <h3>Připoj se na náš discord server</h3>
          <div className={styles.btn_box}>
            <a role="button" aria-label="discord" href="https://discord.mcjabko.cz" className={styles.btn} target="_blank" rel="noreferrer">Připoj se</a>
          </div>
        </div>
        <img src="/discord.svg" className={styles.discord_logo} alt="" />
      </div>

      {/* Sponzor */}
      <div className={styles.top}>
        <h3>Patneři projektu</h3>
      </div>
      <div className={styles.cols}>
        <div>
          <img src="/tennet.png" alt="" />
        </div>
      </div>
    </Layout>
  )
}