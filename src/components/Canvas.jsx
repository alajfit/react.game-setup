import React from 'react'
import Sky from './Sky'
import Ground from './Ground'
import CannonBase from './CannonBase'
import CannonPipe from './CannonPipe'

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
            <Ground />
            <CannonPipe rotation={45} />
            <CannonBase />
        </svg>
    )
}

export default Canvas