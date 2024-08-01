import {React, useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { getUserById } from '../services/UserServices';

export default function Login() {

    const [id, setid] = useState(""); 
    const [password, setPassword] = useState("");

    const navigator = useNavigate();

    const handleClick = () => {
        navigator('/register');
    }

    // Complete this function -> to navigate to User Calendar
    const handleLogIn = () => {

        navigator(`/track/${id}`);
    }

  return (
    <>
    <Navbar/>
    <div className='log-container'>
      
      <div className="ring">
        <i style={{"--clr":"#00ff0a"}}></i>
        <i style={{"--clr":"#ff0057"}}></i>
        <i style={{"--clr":"#fffd44"}}></i>
        <div className="login">
            <h2>Login</h2>
                <div className="inputBx">
                    <input type="text" placeholder="UserName" 
                    
                    value={id} 
                    onChange={(e) => { 
                    setid(e.target.value); 
                    }} 

                    />
                </div>
                <div className="inputBx">
                    <input type="password" placeholder="Password"
                    
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}

                    />
                </div>
                <div className="inputBx cursor_enlarge" id='log-signin' onClick={handleLogIn}>
                    Sign In
                </div>
                <div className="links" onClick={handleClick}>
                    <a href="#">Don't have an account yet? <u className='cursor_enlarge'>SignUp</u></a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}
