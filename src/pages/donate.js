import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/donate.module.css"

export default function donate() {
  return (
    <Layout>
      <Seo title="Donate" lang="cs" />
      <div className={styles.top}>
        <h1>Donate</h1>
        <h2>Podpoř nás v tom co děláme a získej nějaké ty výhody.</h2>
      </div>
      <div className={styles.content_wrapper}>
        <p>
          Náš sever není P2W (Pay to win), proto zde máme pouze rank sponzor.
        </p>

        <div className={styles.section_top}>
          <h2>Výhody</h2>
        </div>
        <ul>
          <li>
            /kit sponzor-který obsahuje 16 steaků, 5 zlatých ingotů 16 rachejtlí
            a 2 zlatá jablka. Kit můžeš použít jednou za 24 hodiny
          </li>
          <li>/hat-přidá blok který právě držíš v ruce na tvoji hlavu</li>
          <li>
            /enderchest-tento příkaz ti otevře tvoji enderchestu. Můžeš také
            psát /ec&nbsp;
          </li>
          <li>/wb-tento příkaz ti otevře craftingtable.</li>
          <li>/pos-tento příkaz ti ukáže tvoje aktuální souřadnice</li>
          <li>+5x /sethome - Možnost si nastavit home.</li>
          <li>/sit - Můžeš si kdekoliv sednout.</li>
          <li>/glow - Nikde se nestratíš</li>
          <li>Rezervovaný slot</li>
          <li>Možnost psát barevně (chat, cedulky, knížky</li>
          <li>Zlatý prefix v chatu a zlatý nick v tabu.</li>
          <li>Náš neskonalý vděk</li>
        </ul>
        <div className={styles.section_top}>
          <h2>Platba pomocí Paypal, Převod na účet</h2>
        </div>
        <div className={styles.section}>
          <p>
            Kontaktuj nás prosím na{" "}
            <a href="https://discord.mcjabko.cz">discoru</a>
          </p>
        </div>

        <div className={styles.section_top}>
          <h2>Platba pomocí SMS</h2>
        </div>
        <div className={styles.list}>
          <div className={styles.sponzor_box}>
            <h3>Sponzor 90 dnů</h3>
            <h4>Platba pomocí SMS</h4>
            <p>Odešlete sms ve tvaru:</p>
            <p>
              <b>PM MCJABKO NICK</b> na číslo <b>9033399</b>
            </p>
            <p className={styles.red}>Pouze CZ</p>
            <p className={styles.small}>Cena SMS je 99Kč vč. DPH</p>
          </div>
          <div className={styles.sponzor_box}>
            <h3>Sponzor 30 dnů</h3>
            <h4>Platba pomocí SMS</h4>
            <p>Odešlete sms ve tvaru:</p>
            <p>
              <b>PM MCJABKO NICK</b> na číslo <b>9033350</b>
            </p>
            <p className={styles.red}>Pouze CZ</p>
            <p className={styles.small}>Cena SMS je 50Kč vč. DPH</p>
          </div>
        </div>
        <span className={styles.small}>
          Službu technicky zajišťuje Airtoy a.s. Reklamace plateb na
          reklamace@airtoy.cz nebo lince 602 777 555, 9 - 17 hodin, Po-Pá,
          www.platmobilem.cz. Kontakt na provozovatele:rispy@mcjabko.cz
        </span>
      </div>
    </Layout>
  )
}
