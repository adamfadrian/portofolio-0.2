import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Modal from '@/components/Modal'
import { motion } from 'framer-motion'
import { BOUNCING_ANIMATION_VARIANTS } from '@/constant/animation'
import { TbDownload } from 'react-icons/tb'
import Skills from '@/components/Skills'
import Contacts from '@/components/Contacts'

const inter = Inter({ subsets: ['latin'] })

const RESUME_FILE_PDF = 'http://localhost:3000/ATS.pdf';
const RESUM_CREATIVE_PDF = 'http://localhost:3000/CREATIVE.pdf';

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const downloadResume = (url: any) => {
    const file = url.split('/').pop();
    const download = document.createElement('a');
    download.href = url;
    download.setAttribute('download', file);
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  };

  return (
    <>
      <Layout>
        <Modal onClose={closeModal} showModal={showModal}>
          <div className='flex flex-col gap-8 '>
            <div className='gap-2 flex flex-col'>
              <h1 className='font-semibold mx-auto text-xl text-center text-black'>Choose Type of CV You need!</h1>
              <h2 className='flex w-96 mx-auto text-center mt-2 text-black'>ATS Version is for CV which ATS friendly. And Creative version for creative CV with colors.</h2>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
              <button className="btn btn-outline text-white bg-purple gap-1 hover:bg-purple text-black" onClick={() => downloadResume(RESUME_FILE_PDF)}>
                <span className="inline-block">
                  <motion.span
                    variants={BOUNCING_ANIMATION_VARIANTS}
                    initial="initial"
                    animate="animate"
                    style={{ display: "inline-block", marginTop: '5px' }}
                  >
                    <TbDownload size={20} />
                  </motion.span>
                </span>ATS version</button>
              <button className="btn btn-outline text-white bg-purple gap-1 hover:bg-purple" onClick={() => downloadResume(RESUM_CREATIVE_PDF)}>
                <span className="inline-block">
                  <motion.span
                    variants={BOUNCING_ANIMATION_VARIANTS}
                    initial="initial"
                    animate="animate"
                    style={{ display: "inline-block", marginTop: '5px' }}
                  >
                    <TbDownload size={20} />
                  </motion.span>
                </span>Creative Version</button>
            </div>
          </div>
        </Modal>
        <Navbar onClick={openModal} />
        <About />
        <Skills/>
        <Contacts/>
      </Layout>
    </>
  )
}
