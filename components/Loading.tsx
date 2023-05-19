import React from 'react'
import Load from '@/public/loading.json'
import Lottie from 'lottie-react'

const Loading = () => {
    return (
        <Lottie
            animationData={Load}
            loop={true}
            autoplay
            className='w-12 h-12'
        />
    )
}

export default Loading