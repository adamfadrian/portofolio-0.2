import lapak from '@/public/Lapak.png'
import dashboard from '@/public/dashboard.png'
import escapist from '@/public/escapist.png'
import movie from '@/public/movie.png'
import { StaticImageData } from 'next/image'

type project = {
    id?: number
    name?: string
    description?: string
    url?: string
    image?: StaticImageData
    github?: string
}

export const projects: project[] = [
    {
        id: 1,
        image: lapak,
        name: 'Lapak-UMKM',
        description: 'LapakUMKM is a platform designed to assist micro, small, and medium-sized enterprises (MSMEs) in Indonesia to market their products online. This platform brings together customers and local products from various regions in Indonesia.',
        url: 'https://lapakumkm.netlify.app/',
        github: 'https://github.com/ALTA-LapakUMKM-Group-2/LapakUMKM-FE',

    },
    {
        id: 2,
        image: escapist,
        name: 'Escapist',
        description: 'Escape to Indonesia with Escapist - the web platform for unique vacation experiences. Browse and book cozy cottages and luxurious villas, and get personalized recommendations for your perfect getaway.',
        url: 'https://escapist-app.netlify.app/',
        github: 'https://github.com/GP3-group1/ALTA-Airbnb-FE',
    },
    {
        id: 3,
        image: dashboard,
        name: 'Immersive Dashboard',
        description: 'Alterra dashboard is a project for cloning the Altera dashboard website. This is my first project in which I collaborated with a backend developer and implemented the CRUD method.',
        url: 'https://alta-dashboard-immersive.vercel.app/',
        github: 'https://github.com/GP2-Team3/ALTA-Dashboard',
    },
    {
        id: 4,
        image: movie,
        name: 'Movie App',
        description: 'My movie app is a simple web platform that retrieves movie data from the TMDB API using the GET method. It was built with React and Axios, and is perfect for movie enthusiasts looking to stay updated on the latest releases.',
        url: 'https://mymovie-app-sable.vercel.app',
        github: 'https://github.com/adamfadrian/mymovie-app',
    }
] 