import React, { useState, FC } from 'react'
import Image from 'next/image'
import davekoz from '@/public/portologo.png'
import { motion } from 'framer-motion'
import { TbDownload } from 'react-icons/tb'
import { BOUNCING_ANIMATION_VARIANTS } from '@/constant/animation'

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Navbar: FC<Props> = ({ onClick }) => {

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{y: -100}}
        transition={{ duration: 0.8, ease: 'easeInOut' }} className="navbar 2xl:px-44 md:px-20  bg-purple z-50 items-center sticky top-0">
        <motion.div className="navbar-start">
          <a href='' className="btn btn-ghost normal-case text-xl"><span className=" text-2xl font-semibold whitespace-nowrap dark:text-white text-black">Adam Fadrian</span></a>
        </motion.div>
        <motion.div className="navbar-center hidden lg:flex">
          <motion.ul className='flex gap-10 '>
            <motion.li>
              <a href="">
                <h1 className='text-xl text-white font-semibold'>About</h1>
              </a>
            </motion.li>
            <motion.li>
              <a href="">
                <h1 className='text-xl text-white font-semibold'>project</h1>
              </a>
            </motion.li>
            <motion.li>
              <a href="">
                <h1 className='text-xl text-white font-semibold'>contact</h1>
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div className='navbar-end'>
          <motion.button className='btn btn-sm bg-transparent border border-white hover:bg-transparent hover:border-blue gap-1' onClick={onClick}>
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
    </>
  )
}

export default Navbar