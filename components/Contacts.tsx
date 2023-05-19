import { useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import Loading from './Loading';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import Image from 'next/image';

import bg from '@/public/IrM.gif';

const Contacts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const animate = useAnimation();
  const { ref, inView } = useInView();
  const form: any = useRef();

  useEffect(() => {
    if (inView) {
      animate.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: 'spring',
          stiffness: 500,
        },
      });
    } else {
      animate.start({
        x: -100,
        opacity: 0,
        transition: {
          duration: 1,
          type: 'spring',
          stiffness: 500,
        },
      });
    }
  }, [inView, animate]);

  const service: string = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateId: string = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await emailjs.sendForm(service, templateId, form.current, publicKey);
      if (res) {
        toast.success('Your message has been sent successfully!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      setLoading(false);
      form.current.reset();
      document.querySelectorAll('input').forEach(i => (i.value = ''));
      document.querySelectorAll('textarea').forEach(i => (i.value = ''));
    } catch (error) {
      if (error) {
        toast.error('There was an error sending your message. Please try again later.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className='flex flex-col mt-20 p-5' id='Contacts'>
      <div className='flex flex-col items-center' ref={ref}>
        <h1 className='flex lg:text-4xl text-2xl font-bold mx-auto mb-10 text-white' data-aos="slide-up" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">C O N T A C T</h1>
        <div className='flex flex-col justify-center items-center gap-3 mb-10 text-white'>
          <h1 className='text-xl font-semibold text-center' data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">I have got just what you need. Lets Talk.</h1>
          <h1 className='flex text-center items-center gap-3 font-medium text-lg ' data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom"><FaPhoneAlt /> +6281399817946</h1>
          <h1 className='flex text-center items-center gap-3 font-medium text-lg' data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom"><IoMdMail /> adamfadrian12@gmail.com</h1>
          <h1 className='flex text-center items-center gap-3 font-medium text-lg' data-aos="fade-left" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom"><ImLocation2 /> Jakarta, Indonesia</h1>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col mx-auto 2xl:w-[600px] gap-5 mb-20 p-5 border-white border-color1 border rounded-lg'>
            <h1 className='flex mx-auto text-2xl text-white font-semibold 2xl:mb-10'>Contact Form</h1>
            <div className='flex gap-2'>
              <div className='w-full'>
                <h1 className=' font-semibold text-lg  text-white mb-2' data-aos="fade-up-left" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">Your Name</h1>
                <input className='input input-bordered input-success w-full  mt-1' required type="text" name="user_name" defaultValue='' placeholder='adam fadrian' data-aos="fade-up-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom" />
              </div>
              <div className='w-full'>
                <h1 className=' font-semibold text-lg  text-white mb-2' data-aos="fade-up-right" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">Company Name</h1>
                <input className='input input-bordered input-success w-full  mt-1' type="text" name="company_name" defaultValue='' placeholder='company name' data-aos="fade-up-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom" />
              </div>
            </div>
            <div className='flex flex-col'>
              <h1 className=' font-semibold text-lg  text-white mb-2' data-aos="fade-up-right" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">Your Email</h1>
              <input className='input input-bordered input-success w-full  mt-1' required type="email" name="user_email" defaultValue='' placeholder='example@gmail.com' data-aos="fade-up-left" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom" />
            </div>
            <div className='flex flex-col'>
              <label className=' font-semibold text-lg  text-white' data-aos="fade-up-right" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">Message</label>
              <textarea className='textarea textarea-bordered textarea-lg w-full textarea-accent mt-1' required name="message" defaultValue='' placeholder='...' data-aos="fade-up-left" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom" />
            </div>
            <button
              data-aos="slide-up" data-aos-duration="400" data-aos-anchor-placement="bottom-bottom"
              disabled={loading}
              type="submit"
              value="Send"
              className='btn bg-purple hover:bg-purple rounded-lg  mx-auto text-white border-none btn-wide text-lg gap-2 mb-5 hover:border-none  hover:scale-110'>
              {loading && <Loading />}
              Send <BsSend />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contacts;