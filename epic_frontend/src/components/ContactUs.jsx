import React from 'react'
import { Link } from "react-router-dom";
import './ContactUs.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ContactAnimation from "../assets/animations/Contact_Us_Animation.json";
import Lottie from 'lottie-react';
import Footer from './Footer';

export default function ContactUs() {

   
  return (
    <>
    <div className="contactUs-Main-body">

      <div className="ContactAnimation">

        <Lottie animationData={ContactAnimation} id="contact-Lottie"/>
      </div>

        <h3 className='CU-header'>
            Contact Us
        </h3>
        <p className="CU-head-para">
        Connect with our EPIC Team Anytime | We value your Feedback
        </p>
    <div className='ContactUs-body'>

      <div className="Cu-content">

      </div>

      <div className="Cu-container">
        <div className="Cu-contactInfo">
          <div className="cu-box">
            <div className="cu-icon"><b></b><FontAwesomeIcon className="CU-i" icon={faLocationDot}/></div>
            <div className="cu-text">
              <h3>Address</h3>
              <p>Headquaters, West Bengal, India</p>
            </div>
          </div>
          <div className="cu-box">
            <div className="cu-icon"><b></b><FontAwesomeIcon className="CU-i" icon={faPhone}/></div>
            <div className="cu-text">
              <h3>Phone</h3>
              <p>+91 2233 9000</p>
            </div>
          </div>
          <div className="cu-box">
            <div className="cu-icon"><b></b><FontAwesomeIcon className="CU-i" icon={faEnvelope}/></div>
            <div className="cu-text">
              <h3>Email</h3>
              <p>epic@gmail.com</p>
            </div>
          </div>
          <h2 className="cu-bottom-txt">Connect With Us</h2>
          <ul className="cu-sci">
            <li><Link to="#"><FontAwesomeIcon icon={faFacebook}/></Link></li>
            
            <li><Link to="//api.whatsapp.com/send?phone=916289767026&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></Link></li>

            <li><Link to="#"><FontAwesomeIcon icon={faLinkedin}/></Link></li>
            <li><Link to="#"><FontAwesomeIcon icon={faInstagram}/></Link></li>
          </ul>
        </div>
        <div className="Cu-contactForm">
          <form action="">
            <h2>Send Message</h2>
            <div className="cu-inputbox">
              <input type="text" name="" required/>
              <span>Full Name</span>
            </div>
            <div className="cu-inputbox">
              <input type="email" name="" required/>
              <span>Email</span>
            </div>
            <div className="cu-inputbox">
              <textarea name="" required/>
              <span>Type Your Message...</span>
            </div>

            {/* <div className="cu-inputbox"> */}

              {/* <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <div id="Cu-attach">Attach Resume</div>
              </label> */}


            {/* </div> */}

            <div className="cu-inputbox">
              <input value="Send" type='submit'/>
            </div>
            

          </form>
        </div>
      </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}
