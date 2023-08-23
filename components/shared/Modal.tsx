import useWindowSize from '@/lib/hooks/use-window-size'
import { AnimatePresence, motion } from 'framer-motion'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import Leaflet from './Leaflet'

const Modal = ({
    showModal,
    setShowModal,
    onClose,
    children
}: {
    showModal: boolean,
    onClose?: () => void
    children: ReactNode
    setShowModal: Dispatch<SetStateAction<boolean>>;
}
) => {

    const {isMobile, isDesktop} = useWindowSize()

    return (
        <>
         <AnimatePresence>
            {
                showModal && (
                    <>
                        {isMobile && <Leaflet setShow={setShowModal}>{children}</Leaflet>}
                        {isDesktop && (
                            <>
                                <motion.div className='fixed inset-0 z-50 flex items-center justify-center m-2 w-full h-full'
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className='fixed inset-0 backdrop-blur-sm' onClick={() => setShowModal(false)}></motion.div>
                                    <motion.div className='bg-white rounded-lg shadow-lg z-10 p-6'>{children}</motion.div>
                                </motion.div>
                            </>
                        )}
                    </>
                )
            }
        </AnimatePresence>
        </>
    )
}

export default Modal