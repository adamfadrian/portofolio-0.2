import React, { useEffect } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import davekoz from '@/public/selftaut.png'
import Link from 'next/link'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constant/animation'

const About = () => {
    const animationLeft = useAnimation();
    const { ref, inView } = useInView();

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
    // --dark: #282C34;
    // --darker: #17191d;
    // --light: #abb2bf;
    // --comment: #abb2bfaa;
    // --lightComment: #abb2bf10;
    // --backgroundComment: #abb2bf11;
    // --red: #E06C75;
    // --green: #98C379;
    // --blue: #61AFEF;
    // --yellow: #E5C07B;
    // --orange: #D19A66;
    // --purple: #C678DD;
    // --cyan: #56B6C2;
    return (
        <motion.div className='flex w-full' >
            <motion.div className='container md:mx-auto p-5 grid grid-cols-1 md:grid-cols-2 justify-around 2xl:gap-5 mx-5 xl:p-5 xl:gap-5'
                ref={ref}
                id='About'
            >
                <motion.div className='text-white text-2xl flex flex-col px-20 justify-center gap-5' animate={animationLeft}
                >
                    <div>
                        <span className='hover:bg-lightComment cursor-pointer px-2'>
                            <span className='text-ungu ml-1 '>if</span>
                            <span className='text-yellow ml-1'>{`(`}</span>
                            <span>!</span>
                            <span className='text-biru ml-1'>confidence</span>
                            <span className='text-yellow ml-1'>{`)`}</span>
                            <span className='text-yellow ml-1'>{`{`}</span>
                        </span>
                        <br />
                        <span className='hover:bg-lightComment cursor-pointer px-2'>
                            <span className='text-biru ml-1'>life</span>
                            <span className='ml-1'>.</span>
                            <span className='text-yellow ml-1'>setMode</span>
                            <span className='text-yellow ml-1'>{`(`}</span>
                            <span className='text-biru ml-1'>Modes.</span>
                            <span className='text-yellow ml-1'>Hard</span>
                            <span className='text-yellow ml-1'>{`)`}</span>
                        </span>
                        <br />
                        <span className='text-yellow ml-4'>{`}`}</span>
                    </div>
                    <div>
                        <span className='hover:bg-lightComment cursor-pointer px-2'>
                            <span className='text-biru ml-1'>anxiety</span>
                            <span className='ml-1'>.</span>
                            <span className='text-yellow ml-1'>addEventListener</span>
                            <span className='text-yellow ml-1 mr-1'>{`(`}</span>
                            <span className='text-yellow ml-1'>{`(`}</span>
                            <span className='ml-1'>thought</span>
                            <span className='text-yellow ml-1'>{`)`}</span>
                            <span className='text-biru ml-1 '> {`=> `}</span>
                        </span>
                        <span className='hover:bg-lightComment cursor-pointer px-2'>
                            <span className='ml-1'>thought</span>
                            <span className='ml-1'>.</span>
                            <span className='text-biru ml-1'>observe( )</span>
                            <span className='text-yellow ml-1'> {`)`}</span>
                        </span>
                    </div>
                    <div>
                        <span className='hover:bg-lightComment cursor-pointer px-2'>
                            <span className='text-biru ml-1'>workHard</span>
                            <span className='ml-1'>.</span>
                            <span className='text-ungu ml-1'>then</span>
                            <span className='text-ungu ml-1'>{`(`}</span>
                            <span className='text-yellow ml-1'>workSmart</span>
                            <span className='text-ungu ml-1'>{`)`}</span>
                        </span>
                    </div>
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
                        <h1 className='2xl:text-5xl lg:text-4xl text-3xl font-semibold playfair'>Adam Fadrian</h1>
                        <h1 className='md:text-xl text-md font-medium playfair'>Frontend Web Developer</h1>
                    </motion.div>
                    <motion.div className='flex items-center' variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <p className='text-sm 2xl:text-lg lato'>I began learning HTML and JavaScript on my own through FreeCodeCamp in 2019.
                            However, I faced many obstacles along the way and found myself getting stuck frequently. Despite these challenges, I continued to learn through self-teaching and practice until I joined Alterra Academy&apos;s bootcamp. where I learned React and TypeScript in addition to HTML and JavaScript. During my time there, my skills grew rapidly, and I worked on several inmotion.dividual and collaborative projects that further honed my abilities. Currently, I am seeking a Frontend Engineer position with a company where I can utilize my skills and continue to develop both professionally and personally.</p>
                    </motion.div>
                    <motion.div className='flex' variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <h1 className='mr-4 md:text-xl font-medium lato'>Check out my</h1>
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