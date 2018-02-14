import React from 'react'
import Sky from './Sky'

const Canvas = () => {
    const viewBox = [
        window.innerWidth / -2,
        100 - window.innerHeight,
        window.innerWidth,
        window.innerHeight
    ]

    return (
        <svg 
            id="home-canvas"
            preserveAspectRatio="xMaxyMax none"
            viewBox={viewBox} >

            <Sky />
            <circle cx={0} cy={0} r={50} />
        </svg>
    )
}

export default Canvas