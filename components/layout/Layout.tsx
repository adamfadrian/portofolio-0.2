import { motion, } from 'framer-motion'
import React, { FC } from 'react'
import { TbDownload } from 'react-icons/tb'
import { BOUNCING_ANIMATION_VARIANTS } from '@/lib/constant/animation'
import useScroll from '@/lib/hooks/use-scroll'
import { useCvModal } from '../cv-modal'

interface Props {
  children: React.ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  const scrolled = useScroll(20)

  const { CvModal, setShowCvModal } = useCvModal()

  return (
    <div className='bg-blue'>
      <CvModal />
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }} className={`navbar 2xl:px-44 md:px-20 transition duration-700 z-50 items-center sticky top-0 ${scrolled ? 'bg-purple' : 'bg-transparent'
          }`} >
        <motion.div className="navbar-start">
          <a href='' className="btn btn-ghost normal-case text-xl"><span className=" text-2xl font-semibold whitespace-nowrap dark:text-white text-black playfair">Adam Fadrian</span></a>
        </motion.div>
        <motion.div className="navbar-center hidden lg:flex">
          <motion.ul className='flex gap-10 '>
            <motion.li>
              <a href="#About">
                <h1 className='text-xl text-white font-semibold playfair'>About</h1>
              </a>
            </motion.li>
            <motion.li>
              <a href="#Projects">
                <h1 className='text-xl text-white font-semibold playfair'>Project</h1>
              </a>
            </motion.li>
            <motion.li>
              <a href="#Contacts">
                <h1 className='text-xl text-white font-semibold playfair'>Contact</h1>
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div className='navbar-end'>
          <motion.button className='btn btn-sm bg-transparent border border-white hover:bg-transparent hover:border-blue gap-1' onClick={() => setShowCvModal(true)}>
            <motion.span
              variants={BOUNCING_ANIMATION_VARIANTS}
              initial="initial"
              animate="animate"
              style={{ display: "inline-block", marginTop: '' }}
            >
              <TbDownload size={20} />
            </motion.span>
            Resume</motion.button>
        </motion.div>
      </motion.div>
      <main className="flex flex-col w-full py-36 justify-center">
        {children}
      </main>
    </div>
  )
}

export default Layout