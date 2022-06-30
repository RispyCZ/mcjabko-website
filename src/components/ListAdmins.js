import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
import Admin from './Admin'

export default function ListAdmins() {
    const admins = [
      {
        Name: "Rispy_CZ",
        Description: "Člověk bez života (No lifer), který se celé dny hraje s Linuxem a tvoří weby?",
        Rank: "majitel",
        
      },
      {
        Name: "LeoWolfCZ",
        Description: "Stará se o to aby naše železo běželo jak má!",
        Rank: "majitel"
      },
      {
        Name: "Gryllen",
        Description: "Jabko považuji za své dítě a také mu dopřávám odpovídající pozornost. Primárně se starám o frontend, přijemné fungování a obecně všechny hráče na našem serveru. Zároveň dělám cokoliv co je kde potřeba, takže je velká šance že mě potkáte ? Přeji příjemné hraní!",
        Rank: "spolumajitel"
      },
      {
        Name: "tomascz887",
        Description: "Zdravím, já jsem Tomáš, jestli budete mít na serveru nějaký problém tak mi určitě neváhejte napsat rád cokoliv vyřeším :). Ačkoliv jsem na serveru skoro furt, tak se může stát že tam nebudu, ale jakmile mi napíšete tak se váš problém pokusím vyřešit co nejrychleji.",
        Rank: "hladmin"
      },
      {
        Name: "Brithalo3",
        Description: "Ahoj mé jméno v tomto fiktivním světě je Britak (jinak Ondy), mám rád čajík o páté a rád vám pomohu se všemi problémy co zvládnu a budu vědět vyřešit. Jinak v čase normálního smrtelníka pracuji, rád čtu knihy a trávím svůj jediný volný čas pohlcen v počítačovém světě her viz Minecraft, csgo a nebo wot.",
        Rank: "support"
      },
      {
        Name: "Modify",
        Description: "Ahoj jmenuji se Modify a již nějaký ten pátek se starám o Vaše hraní na tomto serveru. Nemusíte se bát kontaktovat mou osobu jak na MC, tak na Discordu rád Vám pomohu s jakýmkoliv problémem. Na závěr bych jen řekl, že mám rád férové jednání a férové lidi.",
        Rank: "support"
      },
      {
        Name: "GamecreeperCz",
        Description: "",
        Rank: "support"
      },
      {
        Name: "MonsterBak",
        Description: "",
        Rank: "support"
      },
      {
        Name: "detonator69",
        Description: "",
        Rank: "support"
      },
      {
        Name: "_Orinka_",
        Description: "",
        Rank: "hlbuilder",

      },
      {
        Name: "CosmicL12", 
        Description: "",
        Rank: "builderka"
      }
    ]
    return (
        <>
            {admins.map((item) => {
                const { Name, Description, Rank } = item
                return (
                    <Admin key={uuidv4()} Name={Name} Desc={Description} Rank={Rank} />
                )
            })}
        </>
    )
}
