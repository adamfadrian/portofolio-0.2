import React, { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'
import Modal from './shared/Modal'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TbDownload } from 'react-icons/tb'
import { BOUNCING_ANIMATION_VARIANTS } from '@/lib/constant/animation'

const CvModal = ({
    showCvModal,
    setShowCvModal,
}: {
    showCvModal: boolean;
    setShowCvModal: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <Modal showModal={showCvModal} setShowModal={setShowCvModal}>
            <div className='flex flex-col gap-8 '>
                <div className='gap-2 flex flex-col'>
                    <h1 className='font-semibold mx-auto text-xl text-center text-blue'>Choose Type of CV You need!</h1>
                    <h2 className='flex w-96 mx-auto text-center mt-2 text-blue'>ATS Version is for CV which ATS friendly. And Creative version for creative CV with colors.</h2>
                </div>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <Link href={'https://drive.google.com/file/d/1Xrkb3itNoBwLz5RpoTnslwzUcXG5K2he/view?pli=1'} target='_blank' className="btn btn-outline text-white bg-purple gap-1 hover:bg-purple " >
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
    )
}

export function useCvModal() {
    const [showCvModal, setShowCvModal] = useState(false);
  
    const CvModalCallback = useCallback(() => {
      return (
        <CvModal
          showCvModal={showCvModal}
          setShowCvModal={setShowCvModal}
        />
      );
    }, [showCvModal, setShowCvModal]);
  
    return useMemo(
      () => ({ setShowCvModal, CvModal: CvModalCallback }),
      [setShowCvModal, CvModalCallback],
    );
  }
  