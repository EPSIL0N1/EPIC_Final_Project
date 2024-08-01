import React from 'react'
import "./Slider.css"
import { motion } from 'framer-motion'

export default function Slider() {
  
    return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='slider_container'>
        <div className="slider_text">
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 15}}>
                BE EPIC</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 15}}>
                BE EPIC</motion.h1>
        </div>
    </div>
  )
}
