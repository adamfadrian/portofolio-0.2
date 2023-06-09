import React from 'react'
import Image from 'next/image'
import { skills } from '@/utils/_data/_skills'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Skills = () => {
    const swiperParams = {
        loop: true,
        modules: [Pagination, Autoplay],
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        // onSlideChange: () => console.log('slide change'),
        // onSwiper: (swiper: any) => console.log(swiper),
    };

    return (
        <div className="mt-10 mx-auto 2xl:w-8/12" >
            <div className='w-full flex mb-10'>
                <p className='text-5xl  font-bold text-white mx-auto playfair'>Skills</p>
            </div>
            <div className="flex w-full space-x-10 relative overflow-x-auto p-5 ">
                <Swiper
                    {...swiperParams}
                    pagination={{
                        clickable: true,
                    }}

                >
                    {skills && (
                        skills.map((data: any, index: number) => {
                            return (
                                <div key={data.id} id='Skills'>
                                    <SwiperSlide className='w-[200px] hover:cursor-pointer gap-2' >
                                        <div style={{ minWidth: '200px' }} key={index} data-aos="fade-up-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
                                            <div className="rounded-md shadow-md py-3 bg-purple  text-white font-semibold text-sm flex flex-col items-center mb-10 ">
                                                <Image src={data.icon} alt='' width={60} height={60} />
                                                <h1 className='flex text-md xl:text-xl font-normal '>{data.title}</h1>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    )
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default Skills