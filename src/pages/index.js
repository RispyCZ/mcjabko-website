import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GiServerRack } from '@react-icons/all-files/gi/GiServerRack'
import { GiRingedPlanet } from '@react-icons/all-files/gi/GiRingedPlanet'
import { FaUserSecret } from '@react-icons/all-files/fa/FaUserSecret'
import { IoMdGlobe } from '@react-icons/all-files/io/IoMdGlobe'
import { GoGlobe } from '@react-icons/all-files/go/GoGlobe'
import Seo from '../components/Seo'
import CopyBtn from "../components/CopyBtn"
import ListAdmins from "../components/ListAdmins"

export default function Home() {
  return (
    <Layout>
      <Seo lang="cs" title="Domů" />

      {/* Hero */}
      <div className={styles.header_background}>
        <div className={styles.wrapper_1200}>
          <div className={styles.header}>
            <div style={{ backgroundColor: '#ffffff1a', padding: '2rem', borderRadius: '20px', textAlign: 'center' }}>
              <h1>MCJabko.cz</h1>
              <h2>Vanilla Network</h2>
              <CopyBtn CopyText={"mc.mcjabko.cz"}>mc.mcjabko.cz</CopyBtn>
            </div>
            <img src="https://cdn.mcjabko.cz/images/apple.png" alt="" />
          </div>
        </div>
      </div>

      { /* Worlds */}
      <div className={styles.worlds_background}>
        <div className={styles.wrapper_1200}>
          <div className={styles.top}>
            <h3>Vyber si svět, který ti bude sedět</h3>
          </div>
          <div className={styles.cols}>
            <div className={styles.col}>
              <GoGlobe className={styles.globe} style={{ color: '#32CD32' }} />
              <h3>Zelený svět</h3>
              <p>Charakteristika světa</p>
              <ul className={styles.list}>
                <li className={styles.list_item}>Semi-Vanilla</li>
                <li className={styles.list_item}>Základní přikazy</li>
                <li className={styles.list_item}>Wipe jen pokud je to nutné</li>
                <li className={styles.list_item}>Neomezená mapa</li>
              </ul>
            </div>
            {/*  <div className={styles.col}>
              <GoGlobe className={styles.globe} style={{color: '#9c00e6'}} />
              <h3>Fialový svět</h3>
              <p>Charakteristika světa</p>
              <ul className={styles.list}>
                <li className={styles.list_item}>Semi-Vanilla</li>
                <li className={styles.list_item}>Základní přikazy</li>
                <li className={styles.list_item}>Každých 6 měsíců wipe</li>
                <li className={styles.list_item}>Neomezená mapa</li>
              </ul> 
            </div> */}
            <div className={styles.col}>
              <GoGlobe className={styles.globe} style={{ color: '#1E90FF' }} />
              <h3>Modrý svět</h3>
              <p>Charakteristika světa</p>
              <ul className={styles.list}>
                <li className={styles.list_item}>Vanilla</li>
                <li className={styles.list_item}>Žádné přikazy</li>
                <li className={styles.list_item}>Dynmapa</li>
                <li className={styles.list_item}>Předgenerovaná 5kx5k</li>
              </ul>
            </div>
            <div className={styles.col}>
              <GoGlobe className={styles.globe} style={{ color: '#A52A2A' }} />
              <h3>Červený svět</h3>
              <p>Charakteristika světa</p>
              <ul className={styles.list}>
                <li className={styles.list_item}>LifeSteal</li>
                <li className={styles.list_item}>Griefing povolen</li>
                <li className={styles.list_item}>Použe ty nejnutnějí pluginy</li>
                <li className={styles.list_item}>Omezená mapa (50Kx50K)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why us? */}
      <div className={styles.wrapper_1200}>
        <div className={styles.top}>
          <h3>Tři důvody proč vybrat zrovna náš server?</h3>
        </div>
        <div className={styles.cols}>
          <div className={styles.col}>
            <span className={styles.icon}><GiServerRack /></span>
            <h3>Zázemí</h3>
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
      </div>

      {/* ATeam */}
      <div className={styles.wrapper_1200}>
        <div className={styles.top}>
          <h3>Náš Team</h3>
          <h4>Tento tým bláznů se stará o hladký chod moderovaných serverů.</h4>
        </div>
        <div className={styles.admin_list_cols}>
          <ListAdmins />
        </div>
      </div>

      {/* Servers 
      <div className={styles.servers_background}>
        <div className={styles.wrapper_1200}>
          <div className={styles.top}>
            <h3>Naše zázemní</h3>
            <h4>Na těchno železech provozuje všechny servery! 💪</h4>
          </div>
          <div className={styles.cols}>
            <ListServers />
          </div>
        </div>
      </div>*/}

      {/* Discord */}
      <div className={styles.discord_box}>
        <div className={styles.discord_text}>
          <h3>Připoj se na náš discord server</h3>
          <div className={styles.btn_box}>
            <a role="button" aria-label="discord" href="https://discord.mcjabko.cz" className={styles.btn} target="_blank" rel="noreferrer">Pozvánka zde</a>
          </div>
        </div>
        <img src="/discord.svg" className={styles.discord_logo} alt="" />
      </div>

      {/* Sponzors */}
      <div className={styles.wrapper_1200}>
        <div className={styles.top}>
          <h3>Partneři projektu</h3>
        </div>
        <div className={styles.cols}>
          <div>
            <img src="/tennet.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}