import React from 'react'
import Image from 'next/image'
import Lapak from '@/public/Lapak.png'
import { BsBrowserChrome, BsGithub } from 'react-icons/bs'
import dashboard from '@/public/dashboard.png'
import escapist from '@/public/escapist.png'
import movie from '@/public/movie.png'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='flex flex-col gap-32 p-5 mt-60' id='Projects'>
      <h1 className='text-5xl font-bold text-white mx-auto kalam'>Projects</h1>

      {/* Lapak-UMKM */}
      <div className='container w-full h-full mx-auto bg-purple rounded-xl p-5 overflow-hidden' data-aos='zoom-in' data-aos-duration='500'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-20 '>
          <div className='w-full  flex justify-center ' data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
            <Link href={"https://lapakumkm.netlify.app/"} target='_blank'>
              <Image className='rounded-md hover:cursor-pointer ' src={Lapak} alt='Lapak-UMKM' width={500} height={500} priority={true} />
            </Link>
          </div>
          <div className='flex flex-col w-full  px-5 gap-5 justify-center'>
            <h1 className='text-4xl text-white font-bold' data-aos='fade-left' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Lapak-UMKM</h1>
            <p className='text-lg text-white' data-aos='fade-left' data-aos-duration='700' data-aos-anchor-placement="center-bottom">LapakUMKM is a platform designed to assist micro, small, and medium-sized enterprises (MSMEs) in Indonesia to market their products online. This platform brings together customers and local products from various regions in Indonesia.</p>
            <div className='text-white flex gap-10 hover:cursor-pointer'>
              <div data-aos="fade-up-right" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={"https://lapakumkm.netlify.app/"} target='_blank' className='flex gap-2 items-center'>
                  <BsBrowserChrome size={30} />
                  <h1>Website</h1>
                </Link>
              </div>
              <div data-aos="fade-up-left" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://github.com/ALTA-LapakUMKM-Group-2/LapakUMKM-FE'} className='flex gap-2 items-center' target='_blank'>
                  <BsGithub size={30} />
                  <h1>Github</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Escapist-App */}

      <div className='container w-full h-full mx-auto bg-purple rounded-xl p-5' data-aos='zoom-in' data-aos-duration='500'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-20'>
          <div className='flex flex-col w-full  px-5 gap-5 justify-center'>
            <h1 className='text-4xl text-white font-bold' data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Escapist</h1>
            <p className='text-lg text-white' data-aos='fade-right' data-aos-duration='700' data-aos-anchor-placement="center-bottom">Escape to Indonesia with Escapist - the web platform for unique vacation experiences. Browse and book cozy cottages and luxurious villas, and get personalized recommendations for your perfect getaway.</p>
            <div className='text-white flex gap-10 hover:cursor-pointer'>
              <div data-aos="fade-up-right" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://escapist-app.netlify.app/'} target='_blank' className='flex gap-2 items-center' >
                  <BsBrowserChrome size={30} />
                  <h1>Website</h1>
                </Link>
              </div>
              <div className='flex gap-2 items-center hover:cursor-pointer' data-aos="fade-up-left" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://github.com/GP3-group1/ALTA-Airbnb-FE'} target='_blank' className='flex gap-2 items-center' >
                  <BsGithub size={30} />
                  <h1>Github</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full  flex justify-center' data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
            <Link href={'https://escapist-app.netlify.app/'} target='_blank'>
              <Image className='rounded-md hover:cursor-pointer' src={escapist} alt='escapist' width={500} height={500} priority={true} />
            </Link>
          </div>
        </div>
      </div>
      {/* Immersive Dashboard */}
      <div className='container w-full h-full mx-auto bg-purple rounded-xl p-5' data-aos='zoom-in' data-aos-duration='500'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-20'>
          <div className='w-full  flex justify-center' data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
            <Link href={'https://alta-dashboard-immersive.vercel.app/'} target='_blank'>
              <Image className='rounded-md hover:cursor-pointer' src={dashboard} alt='Dashboard' width={500} height={500} priority={true} />
            </Link>
          </div>
          <div className='flex flex-col w-full  px-5 gap-5 justify-center'>
            <h1 className='text-4xl text-white font-bold' data-aos='fade-left' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Immersive Dashboard</h1>
            <p className='text-lg text-white' data-aos='fade-left' data-aos-duration='700' data-aos-anchor-placement="center-bottom">Alterra dashboard is a project for cloning the Altera dashboard website. This is my first project in which I collaborated with a backend developer and implemented the CRUD method.</p>
            <div className='text-white flex gap-10 hover:cursor-pointer'>
              <div data-aos="fade-up-right" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://alta-dashboard-immersive.vercel.app/'} target='_blank' className='flex gap-2 items-center' >
                  <BsBrowserChrome size={30} />
                  <h1>Website</h1>
                </Link>
              </div>
              <div data-aos="fade-up-left" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://github.com/GP2-Team3/ALTA-Dashboard'} target='_blank' className='flex gap-2 items-center' >
                  <BsGithub size={30} />
                  <h1>Github</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie-App */}
      <div className='container w-full h-full mx-auto bg-purple rounded-xl p-5' data-aos='zoom-in' data-aos-duration='500'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-20'>
          <div className='flex flex-col w-full  px-5 gap-5 justify-center'>
            <h1 className='text-4xl text-white font-bold' data-aos='fade-right' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Movie App</h1>
            <p className='text-lg text-white' data-aos='fade-right' data-aos-duration='700' data-aos-anchor-placement="center-bottom">My movie app is a simple web platform that retrieves movie data from the TMDB API using the GET method. It was built with React and Axios, and is perfect for movie enthusiasts looking to stay updated on the latest releases.</p>
            <div className='text-white flex gap-10 hover:cursor-pointer'>
              <div data-aos="fade-up-right" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://mymovie-app-sable.vercel.app'} target='_blank' className='flex gap-2 items-center' >
                  <BsBrowserChrome size={30} />
                  <h1>Website</h1>
                </Link>
              </div>
              <div data-aos="fade-up-left" data-aos-duration="800" data-aos-anchor-placement="bottom-bottom">
                <Link href={'https://github.com/adamfadrian/mymovie-app'} target='_blank' className='flex gap-2 items-center' >
                  <BsGithub size={30} />
                  <h1>Github</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full  flex justify-center' data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
            <Link href={'https://mymovie-app-sable.vercel.app'} target='_blank'>
              <Image className='rounded-md hover:cursor-pointer' src={movie} alt='movieApp' width={500} height={500} priority={true} />
            </Link>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Projects