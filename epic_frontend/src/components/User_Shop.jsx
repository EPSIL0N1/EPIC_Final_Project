import React from 'react'
import User_Nav from './User_Nav'
import './User_Shop.css'
import {Link} from 'react-router-dom'
import shopping from '../assets/animations/shopping.json'
import Lottie from 'lottie-react'

export default function User_Shop() {
  return (
    <>

    <User_Nav/>

     <div className="user-shop-container">

     <div className="user-calendar-banner">
          <Lottie animationData={shopping} className="user-cal-ani"/>
          <div className="user-banner-header">
          Timely Reminders, Effortless Ordering !
            <p className="user-banner-p">
            Pre-order with ease and get notified. No more last-minute worries, order anywhere, anytime.
            </p>
          </div>
      </div>

        <div className="user-shop-card-container">

            <div className="user-card cursor_enlarge">
                <div className="user-card-imgbx">
                    <img src="../src/assets/epic_images/tampons.png" alt="img loading..." style={{"--wid":"60%", "--widhover": "45%"}}/>
                </div>

                <div className="user-card-contentBx">
                    <h3>Tampons</h3>
                    <h2 className="user-card-price">
                    ₹119.<small id='small-bg-transparent'>99</small>
                    </h2>
                    <Link to="#" className='user-card-buy'>Buy Now</Link>
                </div>

            </div>
            <div className="user-card cursor_enlarge">
                <div className="user-card-imgbx">
                    <img src="../src/assets/epic_images/medicines.jpg" alt="img loading..." style={{"--wid":"60%", "--widhover": "45%"}}/>
                </div>

                <div className="user-card-contentBx">
                    <h3>Medicines</h3>
                    <h2 className="user-card-price">
                    ₹99.<small id='small-bg-transparent'>00</small>
                    </h2>
                    <Link to="#" className='user-card-buy'>Buy Now</Link>
                </div>

            </div>
            <div className="user-card cursor_enlarge">
                <div className="user-card-imgbx">
                    <img src="../src/assets/epic_images/choco.jpg" alt="img loading..." style={{"--wid":"70%", "--widhover": "50%"}}/>
                </div>

                <div className="user-card-contentBx">
                    <h3>Hungry?</h3>
                    <h2 className="user-card-price">
                    ₹89.<small id='small-bg-transparent'>59</small>
                    </h2>
                    <Link to="#" className='user-card-buy'>Buy Now</Link>
                </div>

            </div>

        </div>
     </div>

    </>
  )
}
