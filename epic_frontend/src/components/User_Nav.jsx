import React from 'react'
import './User_Nav.css'
import { Link, useLocation, useParams } from "react-router-dom";

export default function User_Nav() {

    let location = useLocation();
    const { id } = useParams();

  return (
    <div className='user-nav-container'>
        <Link to="/" className="user-nav-logo">
            epic
        </Link>
        <Link className={location.pathname === `/track/${id}` ? "user-nav-items j-u-animation user-nav-active" : "user-nav-items j-u-animation"} to = {`/track/${id}`} >Track</Link>
        <Link className= {location.pathname === `/shop/${id}` ? "user-nav-items j-u-animation user-nav-active" : "user-nav-items j-u-animation"} to={`/shop/${id}`}>Shop</Link>
        {/* <Link className="user-nav-items j-u-animation" to={`http://localhost:8501/flow-gpt/?id=${id}`}>AI Chatbot</Link> */}
        <Link className="user-nav-items j-u-animation" to={`http://192.168.29.108:8501/flow-gpt/?id=${id}`}>AI Chatbot</Link>
        {/* <Link className="user-nav-items j-u-animation" to={`http://192.168.29.108:8501/flow-gpt`}>AI Chatbot</Link> */}
        <Link className="user-nav-items j-u-animation" to={`http://192.168.29.17:5000`}>Community</Link>
        <Link className= {location.pathname === `/contactUs/${id}` ? "user-nav-items j-u-animation user-nav-active" : "user-nav-items j-u-animation"} to={`/contactUs/${id}`}>Contact Us</Link>
        <Link className="user-nav-items j-u-animation" to='/login'>LogOut</Link>

    </div>
  )
}
