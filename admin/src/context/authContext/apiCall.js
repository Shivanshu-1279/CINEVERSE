import axios from 'axios';
import { loginStart, loginFailure, loginSuccess } from './AuthActions';

export const login =async(user,dispatch) =>{

//  connecting with login api and verifying the token

//starting 
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);

        //login done successfully and data needs to be shown.
        // below a condition is also given that if Admin is true then return success
 res.data.isAdmin && dispatch(loginSuccess(res.data))

    } catch (error) {
      //Unabled to log in
        dispatch(loginFailure());
    }
}