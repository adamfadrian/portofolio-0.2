import Link from 'next/link';
import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            {/* <!--Footer container--> */}
            <footer className="footer footer-center mt-36 p-10  text-base-content bg-purple">
                <div>
                    <div className="grid grid-flow-col gap-10 dark:text-white">
                        <Link target='_blank' href={'https://www.linkedin.com/in/adam-fadrian-311000227/'} className='hover:scale-125'>
                            <BsLinkedin size={30} />
                        </Link>
                        <Link target='_blank' href={'https://github.com/adamfadrian/'} className='hover:scale-125'>
                            <BsGithub size={30} />
                        </Link>
                        <Link target='_blank' href={'https://www.instagram.com/adamfadrian/'} className='hover:scale-125' >
                            <BsInstagram size={30} />
                        </Link>
                        <Link target='_blank' href={'https://twitter.com/adamfadrian'} className='hover:scale-125' >
                            <BsTwitter size={30} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-flow-col gap-4 ">
                    <h1 className='font-medium 2xl:text-lg text-white'> Built with Typescript, React, AOS, Framer-Motion, daisyUI</h1>
                </div>
                <div>
                    <p className='font-medium text-white 2xl:text-xl'>Copyright © 2023 - All right reserved by Adam Fadrian</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer