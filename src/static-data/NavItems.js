import React from "react"
import {
  House,
  Scales,
  Info,
  Money,
  Question,
  Lightbulb,
  IdentificationBadge,
} from "phosphor-react"
const items = [
  {
    icon: (
      <House
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Domů",
    url: "/",
  },
  {
    icon: (
      <Scales
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Pravidla",
    url: "/pravidla",
  },
  {
    icon: (
      <Info
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "O nás",
    url: "/o-nas",
  },
  {
    icon: (
      <Question
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "FAQ",
    url: "/faq",
  },
  {
    icon: (
      <Money
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Donate",
    url: "/donate"
  },
  {
    icon: (
      <Lightbulb
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Wiki",
    url: "https://wiki.mcjabko.cz",
  },
  {
    icon: (
      <IdentificationBadge
        size={"1.5em"}
        style={{ verticalAlign: "middle" }}
        color="#f66151"
        weight="duotone"
      />
    ),
    name: "Banlist",
    url: "https://banlist.mcjabko.cz",
  },
]
export default items
