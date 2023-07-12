import axios from 'axios';
import { loginStart, loginFailure, loginSuccess } from './AuthActions';

export const login =async(user,dispatch) =>{

//  connecting with login api and verifying the token

//starting 
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
         dispatch(loginSuccess(res.data))

    } catch (error) {
      //Unabled to log in
      alert("Wrong Credentials");
        dispatch(loginFailure());
    }
}