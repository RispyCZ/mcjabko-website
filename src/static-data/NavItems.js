import React from 'react'
import { FaGavel } from '@react-icons/all-files/fa/FaGavel'
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaQuestionCircle } from '@react-icons/all-files/fa/FaQuestionCircle'

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