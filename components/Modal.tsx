import React, { FC, useEffect } from 'react'

interface Props {
    children?: React.ReactNode
    showModal?: boolean
    onClose?: () => void
}

const Modal: FC<Props> = ({ showModal = false, children, onClose }) => {
    const overlayClick = () => {
        if (onClose) onClose()
    }

    if (!showModal) return null
    return (
        <>
            {
                showModal && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center m-2 w-full h-full'
                        data-aos="flip-down" data-aos-duration="1100"
                    >
                        <div className='fixed inset-0 backdrop-blur-sm' onClick={overlayClick}></div>
                        <div className='bg-white rounded-lg shadow-lg z-10 p-6'>{children}</div>
                    </div>
                )
            }
        </>
    )
}

export default Modal