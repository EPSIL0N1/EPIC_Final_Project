import {React, useState} from "react"; 
import './Register.css';
import {validateEmail} from "./validEmail";
import { useNavigate } from 'react-router-dom';
import { createUser } from "../services/UserServices";

const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   };

export default function Register() {

    const navigator = useNavigate();

    
    let userId = 0;
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState({ 
    value: "", 
    isTouched: false, 
    }); 

    const getIsFormValid = () => { 
    return ( 
        firstName && 
        validateEmail(email) && 
        pass.value.length >= 8
    ); 
    }; 
    
    const clearForm = () => { 
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPass({ 
        value: "", 
        isTouched: false, 
    }); 
    // setRole("role"); 
    }; 
    
    // Handle Create User
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        const password = pass.value;
        const userName = firstName;
        const user = {userName, password};

        await createUser(user).then((response)=>{
            console.log(response.data.id);
            userId = response.data.id;
        }).catch(err=>{
            console.error(err);
        });
        console.log(user)

        // alert("Please check your mail and LogIn through the credentials provided !"); 
        clearForm(); 
        navigator(`/userform/${userId}`);
    }; 

    const handleClick = () => {
      
    }

  return (
    <div className='regi-container'>

    <div className="reg-ring">
        <i style={{"--clr":"#00ff0a"}}></i>
        <i style={{"--clr":"#ff0057"}}></i>
        <i style={{"--clr":"#fffd44"}}></i>
        <form onSubmit={handleSubmit} id="reg-form"> 
       <fieldset className="regi-field"> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input className="regi-input" 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input className="regi-input" 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input className="regi-input" 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input className="regi-input" 
             value={pass.value} 
             type="password" 
             onChange={(e) => { 
               setPass({ ...pass, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPass({ ...pass, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {pass.isTouched && pass.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         {/* <div className="Field"> 
           <label> 
             Role <sup>*</sup> 
           </label>  */}
           {/* <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="role">Role</option> 
             <option value="individual">Individual</option> 
             <option value="business">Business</option> 
           </select>  */}
         {/* </div>  */}
         <button type="submit" disabled={!getIsFormValid()} id="regi-button"> 
           Create account 
         </button> 
       </fieldset> 
            <div className="links" onClick={handleClick}>
                <a href="#">Already have an account? <u className='cursor_enlarge'>SignIn</u></a>
            </div>
     </form> 
     
   </div> 
    </div>
    // </div>
  )
}
