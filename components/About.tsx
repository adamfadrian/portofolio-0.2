import React, { useEffect } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import davekoz from '@/public/selftaut.png'
import Link from 'next/link'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constant/animation'


const About = () => {
    const animationLeft = useAnimation();
    const { ref, inView } = useInView();
    const animationRight = useAnimation()

    useEffect(() => {
        if (inView) {
            animationLeft.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.15
                }
            })
        }
        if (!inView) {
            animationLeft.start({
                x: -100,
                opacity: 0
            })
        }
    }, [inView, animationLeft])





    return (
        <motion.div className='flex w-full' >
            <motion.div className='container md:mx-auto p-5 grid grid-cols-1 md:grid-cols-2 justify-around 2xl:gap-5 mx-5 xl:p-5 xl:gap-5'
                ref={ref}
                id='About'
            >
                <motion.div className='text-white ' animate={animationLeft}
                >
                    <Image className='object-fill' src={davekoz} alt="Adam Fadrian" />
                </motion.div>
                <motion.div className='text-white w-full flex flex-col 2xl:gap-10 gap-4 justify-center p-2'
                    initial="hidden"
                    whileInView="show"
                    animate="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}>
                    <motion.div className='flex flex-col 2xl:mx-auto items-center gap-1' variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <h1 className='2xl:text-5xl lg:text-4xl text-3xl font-semibold kalam'>Adam Fadrian</h1>
                        <h1 className='md:text-xl text-md font-medium kalam'>Frontend Web Developer</h1>
                    </motion.div>
                    <motion.div className='flex items-center' variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <p className='text-sm 2xl:text-lg pangolin'>I began learning HTML and JavaScript on my own through FreeCodeCamp in 2019.
                            However, I faced many obstacles along the way and found myself getting stuck frequently. Despite these challenges, I continued to learn through self-teaching and practice until I joined Alterra Academy&apos;s bootcamp. where I learned React and TypeScript in addition to HTML and JavaScript. During my time there, my skills grew rapidly, and I worked on several inmotion.dividual and collaborative projects that further honed my abilities. Currently, I am seeking a Frontend Engineer position with a company where I can utilize my skills and continue to develop both professionally and personally.</p>
                    </motion.div>
                    <motion.div className='flex' variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <h1 className='mr-4 md:text-xl font-medium kalam'>Check out my</h1>
                        <motion.div className="grid grid-flow-col gap-3 dark:text-white" >
                            <Link target='_blank' href={'https://www.instagram.com/adamfadrian/'} className='hover:scale-125' >
                                <BsInstagram size={25} />
                            </Link>
                            <Link target='_blank' href={'https://www.linkedin.com/in/adam-fadrian-311000227/'} className='hover:scale-125'>
                                <BsLinkedin size={25} />
                            </Link>
                            <Link target='_blank' href={'https://github.com/adamfadrian/'} className='hover:scale-125 '>
                                <BsGithub size={28} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About