import React from 'react'
import "./Navbar.css"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  let location = useLocation();

  return (
    <div className='Nav_Container'>
      <Link className="Nav_logo cursor_enlarge" to="/">
        epic
      </Link>
      <Link to="/contactUs" className={location.pathname === `/contactUs` ? "nav_extra cursor_enlarge j-u-animation user-nav-active" : "nav_extra cursor_enlarge j-u-animation"}>
        Contact Us
      </Link>
      <Link to="/login" className={location.pathname === `/login` ? "nav_extra cursor_enlarge j-u-animation user-nav-active" : "nav_extra cursor_enlarge j-u-animation"}>
        Log In
      </Link>
    </div>
  )
}
