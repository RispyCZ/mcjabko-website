import React from 'react'
import { FaGavel } from '@react-icons/all-files/fa/FaGavel'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaQuestionCircle } from '@react-icons/all-files/fa/FaQuestionCircle'
import { FaDonate } from '@react-icons/all-files/fa/FaDonate'
import { FaUserSecret } from '@react-icons/all-files/fa/FaUserSecret'

const items = [
    {
        icon: <FaHome />,
        name: 'Domů',
        url: '/'
    },
    {
        icon: <FaGavel />,
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
    /*{
        icon: <FaDonate />,
        name: 'Sponzor',
        url: ''
    },*/
]
export default items