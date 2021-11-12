import React from 'react'
import { FaGavel } from '@react-icons/all-files/fa/FaGavel'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaDonate } from '@react-icons/all-files/fa/FaDonate'
import { FaQuestionCircle } from '@react-icons/all-files/fa/FaQuestionCircle'
import {GoListOrdered} from '@react-icons/all-files/go/GoListOrdered'
const items = [
    {
        icon: <FaHome />,
        name: 'Domů',
        url: '/'
    },
    {
        icon: <GoListOrdered />,
        name: 'Pravidla',
        url: '/pravidla'
    },
    {
        icon: <FaInfoCircle/>,
        name: 'O nás',
        url: '/o-nas'
    },
    {
        icon: <FaQuestionCircle />,
        name: 'FAQ',
        url: '/faq'
    },
    {
        icon: <FaDonate />,
        name: 'Sponzor',
        url: '/donate'
    },
    {
        icon: <FaGavel/>,
        name: 'Banlist',
        url: 'https://banlist.mcjabko.cz'
    },

]
export default items