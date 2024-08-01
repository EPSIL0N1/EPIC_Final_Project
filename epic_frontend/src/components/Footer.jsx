import React from 'react'
import './Footer.css'
import fVdo from '../assets/epic_videos/Color_woman_dancing_animated.mp4'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className='footer-container' data-scroll data-scroll-section data-scroll-speed="-.70">
      <div className="f-sub-container">
    
        <video autoPlay loop muted src={fVdo} type='video/mp4' className='f-video'/>

        <div className="f-social">


            <h1 className='f-sub-header'> Socials </h1>
            <div className='f-sub-para j-u-animation'>
                Whatsapp
            </div>

            <div className='f-sub-para j-u-animation'> 
                Facebook
            </div>

            <div className='f-sub-para j-u-animation'>
                Instagram
            </div>
            
            <div className="f-sub-para j-u-animation">
                Twitter
            </div>

        </div>
        
        <div className="f-quickLinks">

        <h1 className='f-sub-header'> Links </h1>
            <div className="f-sub-para j-u-animation">Home</div>
            <div className="f-sub-para j-u-animation">AboutUs</div>
            <div className="f-sub-para j-u-animation">ContactUs</div>
            <div className="f-sub-para j-u-animation">LogIn</div>

        </div>

        <div className="f-Services">

        <h1 className='f-sub-header'> Services </h1>

        

            <div className="f-sub-para j-u-animation">
                Track and Predict
            </div>
            <div className="f-sub-para j-u-animation">
                Reminders with AutoOrder
            </div>
            <div className="f-sub-para j-u-animation">
                AI Visual Chatbot
            </div>
            <div className="f-sub-para j-u-animation">
                Woman Community
            </div>

        </div>

      </div>

        <div className="f-byPragati">
            
            <div className='f-sub-pragati'> 
            @2024 by Team Pragati 
            </div>

            <div className="f-sub-pragati">
                Privacy Policy <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <div className="f-sub-pragati">
                Terms and Conditions <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            
        </div>

        <div className="f-marquee">
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 15}}>
                BE EPIC</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 15}}>
                BE EPIC</motion.h1>
        </div>

    </div>
  )
}
