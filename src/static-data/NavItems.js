import React from 'react'
import { House, Scales, Info, Question, Money, IdentificationBadge } from 'phosphor-react'
const items = [
    {
        icon: <House size={'1.5em'} style={{display: 'block', margin: 'auto'}} color="#f66151" weight="duotone" />,
        name: 'Domů',
        url: '/'
    },
    {
        icon: <Scales size={'1.5em'} style={{display: 'block', margin: 'auto'}} color="#f66151" weight="duotone" />,
        name: 'Pravidla',
        url: '/pravidla'
    },
    {
        icon: <Info size={'1.5em'} style={{display: 'block', margin: 'auto'}} color="#f66151" weight="duotone" />,
        name: 'O nás',
        url: '/o-nas'
    },
    {
        icon: <Question size={'1.5em'} style={{display: 'block', margin: 'auto'}} color="#f66151" weight="duotone" />,
        name: 'FAQ',
        url: '/faq'
    },
    {
        icon: <Money size={'1.5em'} style={{display: 'block', margin: 'auto'}} color="#f66151" weight="duotone" />,
        name: 'Sponzor',
        url: '/donate'
    },
    {
        icon: <IdentificationBadge size={'1.5em'}  style={{display: 'block', margin: 'auto'}} color="#f66151" weight="duotone" />,
        name: 'Banlist',
        url: 'https://banlist.mcjabko.cz'
    },

]
export default items