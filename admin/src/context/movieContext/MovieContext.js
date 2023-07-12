import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

// defining our initial state:
const INITTAL_STATE = {
    movies:[],
    isFetching:false,
    error:false,
};


export const MovieContext = createContext(INITTAL_STATE);

export const MovieContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(MovieReducer , INITTAL_STATE);

    return (
        <MovieContext.Provider 
        value={{ 
        movies: state.movies, 
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        }}
        > 

        {children} 
        </MovieContext.Provider>
    );
};