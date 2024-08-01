import React from 'react'
import './JoinToday.css'
import Lottie from 'lottie-react'
import flowers from '../assets/animations/woman_holding_flowers.json'
import { useNavigate } from 'react-router-dom'

export default function JoinToday() {

  const navigator = useNavigate();

  const handleJoin = () =>{
    navigator('/register');
  }

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".6" className='j-container'>

        <div className="j-animation">
            <Lottie animationData={flowers} id='j-Lottie'/>
            <div className="j-text">
            <h1>
            Why wait?
            </h1>
            <p>
            <span className='j-underline j-u-animation cursor_enlarge' onClick={handleJoin}>
            Join  us 
            </span>
            today and start feeling empowered!
            </p>
            </div>
        </div>

    </div>
  )
}
