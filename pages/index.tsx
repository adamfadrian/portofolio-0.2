import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { BOUNCING_ANIMATION_VARIANTS } from '@/constant/animation'
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
      {/* Modal For Download Resume */}
      <Modal onClose={closeModal} showModal={showModal}>
        <div className='flex flex-col gap-8 '>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold mx-auto text-xl text-center text-blue'>Choose Type of CV You need!</h1>
            <h2 className='flex w-96 mx-auto text-center mt-2 text-blue'>ATS Version is for CV which ATS friendly. And Creative version for creative CV with colors.</h2>
          </div>
          <div className='flex flex-row justify-center items-center gap-4'>
            <Link href={'https://drive.google.com/file/d/1QvzCA-bbSg5Lr44OT_9JC6eJ_duhTtJU/view?pli=1'} target='_blank' className="btn btn-outline text-white bg-purple gap-1 hover:bg-purple " >
              <span className="inline-block">
                <motion.span
                  variants={BOUNCING_ANIMATION_VARIANTS}
                  initial="initial"
                  animate="animate"
                  style={{ display: "inline-block", marginTop: '5px' }}
                >
                  <TbDownload size={20} />
                </motion.span>
              </span>ATS version
            </Link >
            <Link href={'https://drive.google.com/file/d/1lthvIdGuzQicPzJpMGThgMtxV5Vq_vDd/view'} target='_blank' className="btn btn-outline text-white bg-purple gap-1 hover:bg-purple" >
              <span className="inline-block">
                <motion.span
                  variants={BOUNCING_ANIMATION_VARIANTS}
                  initial="initial"
                  animate="animate"
                  style={{ display: "inline-block", marginTop: '5px' }}
                >
                  <TbDownload size={20} />
                </motion.span>
              </span>Creative Version</Link>
          </div>
        </div>
      </Modal>
      {/* Modal End */}

      <Navbar onClick={openModal} />
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
