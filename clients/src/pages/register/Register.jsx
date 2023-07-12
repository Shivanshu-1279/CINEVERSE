import { useRef } from "react";
import "./register.scss"
import { Link } from "react-router-dom";

import React, { useState } from 'react'
import  axios  from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();


  // useHistory hook is used to push it to that page after a particular task has completed.
  const history = useHistory();

  
  const handleStart =()=>{
        setemail(emailRef.current.value);
  };

  // using axios for register
  const handleFinish = async (e)=>{
    e.preventDefault();
    try {
      setpassword (passwordRef.current.value);
      setusername (usernameRef.current.value);

    await axios.post("auth/register" ,  {
         email,
         username,
         password
    }); 

    // after registration is done, then it will move it to the login part.
    history.push("/login");
    } 
    catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="register">
       <div className="top">
        <div className="wrapper">
        
        <img className="logo" src=" https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

<Link to="/login">
<button className="loginButt">
        Sign In
       </button>
  
</Link>
      
       </div>
     </div>

       <div className="container">
        <h2>Unlimited Movies, Series, TV shows and more</h2>
        <h3>Watch Anywhere and cancel anytime.</h3>
         <p>
          Ready to watch? Enter your email to create and start your membership
         </p>
                                   
          {/* below condition is given  i.e if email is filled then and only password field will be shown otherwise it won't show it  */}
        
          {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}

       </div>
    </div>
  )
}