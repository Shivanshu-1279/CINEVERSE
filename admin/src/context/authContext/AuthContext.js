import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import {useEffect} from 'react'

// defining our initial state:
const INITTAL_STATE ={
    user: JSON.parse(localStorage.getItem("user")) || null ,
    isFetching:false,
    error:false,
};


export const AuthContext = createContext(INITTAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer , INITTAL_STATE);

    // this is done so that our data can be store in local storage and can be able to fetch data when loged in successfully.
 useEffect(() => {
localStorage.setItem("user", JSON.stringify(state.user))
 }, [state.user])
    
 
    return (
        <AuthContext.Provider 
        value={{ 

// It will return according to all the given value, and finally it reaches to dispatch which could return respective actions
        user: state.user, 
        isFetching: state.isFetching,
        error: state.error,
        dispatch
        }}> 
        {children} 
        </AuthContext.Provider>
    )
};