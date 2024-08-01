import React from 'react'
import "./Offer.css"
import calenderAnimation from "../assets/animations/Calender_Animation.json"
import deliveryAnimation from "../assets/animations/Delivery_Animation.json"
import chatbot from "../assets/animations/ChatBot_Animation.json"
import community from "../assets/animations/Community_Animation.json"
import Lottie from 'lottie-react'
import {motion} from 'framer-motion'
import { fadeIn } from './variants'

export default function Offer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="offer-container">
    {/* <div className="offer-container"> */}
        <h1 className="o-header">
            WHAT WE OFFER
        </h1>
        <div className="timeline">
            <motion.div 
            
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}

            className="o-container left-container">
                <img src="./src/assets/epic_images/track_predict_logo.jpeg" className="img_invert"/>
                <div className="o-textbox cursor_enlarge">
                    <div className="o-sub-left" id="color1">
                    <h2>
                        Track & Predict
                    </h2>
                    <p>
                    Enhance menstrual journey with advance precision, predict cycles, and optimize fertility
                    </p>
                    </div>
                    <div className="o-sub-right">
                        <Lottie animationData={calenderAnimation}/>
                    </div>
                    <span className='left-container-arrow'></span>
                </div>
            </motion.div>
            <motion.div

            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}            
            
            className="o-container right-container">
                <img src="./src/assets/epic_images/ease_logo.jpeg" className="img_invert"/>
                <div className="o-textbox cursor_enlarge">
                <div className="o-sub-left" id="color2">
                    <h2>
                        CONNECT AT EASE
                    </h2>
                    <p>
                    Access essential products and medications, and connect with healthcare pros for personalized support
                    </p>
                    </div>
                    <div className="o-sub-right">
                        <Lottie animationData={deliveryAnimation}/>
                    </div>
                    <span className='right-container-arrow'></span>
                </div>
            </motion.div>
            <motion.div 
            
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}
            
            className="o-container left-container">
                <img src="./src/assets/epic_images/chatbot_logo.jpg" className='img_invert'/>
                <div className="o-textbox cursor_enlarge">
                <div className="o-sub-left" id="color3">
                    <h2>
                        VISUAL CHATBOT

                    </h2>
                    <p>
                    Search via text or images to receive tailored solutions for all your period-related concerns from our chatbot
                    </p>
                    </div>
                    <div className="o-sub-right">
                        <Lottie animationData={chatbot}/>
                    </div>
                    <span className='left-container-arrow'></span>
                </div>
            </motion.div>
            <motion.div 
            
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.7}}
            
            className="o-container right-container">
                <img src="./src/assets/epic_images/community_logo.jpeg" className="img_invert"/>
                <div className="o-textbox cursor_enlarge">
                <div className="o-sub-left" id='color4'>
                    <h2>
                        COMMUNITY FOR WOMAN

                    </h2>
                    <p>
                    Learn about menstrual health through article campaigns and form a social media community with people of similar interests
                    </p>
                    </div>
                    <div className="o-sub-right">
                        <Lottie animationData={community}/>
                    </div>
                    <span className='right-container-arrow'></span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
