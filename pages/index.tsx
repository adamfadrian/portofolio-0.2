import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/shared/Modal'
import { motion } from 'framer-motion'
import { BOUNCING_ANIMATION_VARIANTS } from '@/lib/constant/animation'
import { TbDownload } from 'react-icons/tb'
import Skills from '@/components/Skills'
import Contacts from '@/components/Contacts'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import { TfiArrowCircleUp } from 'react-icons/tfi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const RESUME_FILE_PDF = 'http://localhost:3000/ATS.pdf';
const RESUM_CREATIVE_PDF = 'http://localhost:3000/CREATIVE.pdf';

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // open and Close modal for Resume
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  //Local Download
  const downloadResume = (url: any) => {
    const file = url.split('/').pop();
    const download = document.createElement('a');
    download.href = url;
    download.setAttribute('download', file);
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  };

  const scrollTop = () => {
    if (scrollRef.current) {
      const scroll = scrollRef.current
      if (window.scrollY > 700) {
        scroll.style.visibility = 'visible'
        scroll.style.opacity = '1'
      } else {
        scroll.style.visibility = 'hidden'
        scroll.style.opacity = '0'
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTop)
    return () => window.removeEventListener('scroll', scrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (

    <Layout>
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <div className='block fixed right-5 bottom-10 2xl:right-20 2xl:bottom-20 text-white rounded-full cursor-pointer' style={{ visibility: 'hidden', opacity: '0' }} ref={scrollRef} onClick={scrollToTop}>
        <TfiArrowCircleUp size={40} />
      </div>
      <Footer />
    </Layout>

  )
}
