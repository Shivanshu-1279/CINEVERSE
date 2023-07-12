import React, { useContext, useState } from 'react'
import "./login.css";
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCall';

export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
       
    // calling dispatch here 
    const {isFetching , dispatch} = useContext(AuthContext);

    const handleLogin =(e)=>{
    e.preventDefault();

    //getting api call 
  login({email,password} , dispatch);
    };

  return (
    <div className='login'>
         <form className="loginForm">
         <input type="text" placeholder="Email" className="loginInput" onChange={(e)=>setEmail(e.target.value)} />
         <input type="password" placeholder="Password" className="loginInput" onChange={(e)=>setPassword(e.target.value)} />
         <button className='loginBut' onClick={handleLogin} disabled={isFetching}
         // while fetching button will be disabled.
         >Login</button>
         </form>
    </div>
  )
}