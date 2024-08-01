import React from 'react'
import BlobCanvas from "./BlobCanvas"

import Navbar from './Navbar'
import Slider from './Slider';
import Offer from './Offer';
import JoinToday from './JoinToday';
import Footer from './Footer';
// import User_Calendar from './components/User_Calendar';

export default function Home() {
  return (
    <>
        
        <Navbar/>
        <BlobCanvas/>
        <Slider/>
        <Offer/>
        <JoinToday/>
        <Footer/>
    </>
  )
}
