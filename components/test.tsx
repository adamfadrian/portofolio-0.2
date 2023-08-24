import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Lapak from '@/public/Lapak.png'
import { BsBrowserChrome, BsGithub } from 'react-icons/bs'
import dashboard from '@/public/dashboard.png'
import escapist from '@/public/escapist.png'
import movie from '@/public/movie.png'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
    id: number
    title: string
    description?: string
    image?: StaticImageData
    logo: string
    link?: string
}


export default function Test() {
    return (
        <>
            <motion.div className='grid grid-cols-1 md:grid-cols-4 gap-10 container mx-auto px-10 md:px-0'>
                {
                    project.map(({ id, title, logo, description }: Project) => {
                        return (
                            <>
                                <motion.div
                                    whileHover={{ y: -15 }}
                                    className='flex flex-col shadow-md rounded-lg p-5  bg-purple2 text-white gap-4 hover:cursor-pointer hover:border hover:border-white' key={id}>
                                    <motion.div className='w-full flex items-center justify-center mb-5'>
                                        <Image
                                            src={logo}
                                            alt={title}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '60%', height: '150px' }}
                                        />
                                    </motion.div>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                </motion.div>
                            </>
                        )
                    })
                }
            </motion.div>
        </>
    )
}

const project = [
    {
        id: 1,
        title: 'Lapak-UMKM',
        description: 'LapakUMKM is a platform designed to assist micro, small, and medium-sized enterprises (MSMEs) in Indonesia to market their products online. This platform brings together customers and local products from various regions in Indonesia.',
        image: Lapak,
        logo: '/LapakUmkmLogo.png',
        link: 'https://github.com/ALTA-LapakUMKM-Group-2/LapakUMKM-FE'
    },
    {
        id: 2,
        title: 'Escapist-App',
        description: 'Escape to Indonesia with Escapist - the web platform for unique vacation experiences. Browse and book cozy cottages and luxurious villas, and get personalized recommendations for your perfect getaway.',
        image: escapist,
        logo: '/escapistLogo.png',
        link: 'https://github.com/GP3-group1/ALTA-Airbnb-FE'
    },
    {
        id: 3,
        title: 'Immersive Dashboard',
        description: 'Alterra dashboard is a project for cloning the Altera dashboard website. This is my first project in which I collaborated with a backend developer and implemented the CRUD method.',
        image: dashboard,
        logo: '/logoAlta.png',
        link: 'https://github.com/GP2-Team3/ALTA-Dashboard'
    },
    {
        id: 4,
        title: 'Movie-app',
        description: 'My movie app is a simple web platform that retrieves movie data from the TMDB API using the GET method. It was built with React and Axios, and is perfect for movie enthusiasts looking to stay updated on the latest releases.',
        image: movie,
        logo: '/tmdb.png',
        link: 'https://github.com/adamfadrian/mymovie-app'
    }
]