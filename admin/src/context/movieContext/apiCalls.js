import axios from 'axios';
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, moviesFailure, moviesStart, moviesSuccess } from './MovieActions';

 export const getMovies = async (dispatch) => {

    dispatch(moviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {

// getting the saved web token from the local storage and converting it to the parese form since it is in string form and then using it for getting data(in form of movies list).
                
            // token: "Bearer "  + JSON.parse(localStorage.getItem("user")).accessToken,        

            // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"

             token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODc1MTY1NSwiZXhwIjoxNjg5MTgzNjU1fQ.IziRbj9tbZnwcUiaI16qHnq3o5FHF0u7Cp64zagGwjc"
          
              },
        });

        dispatch(moviesSuccess(res.data))
    } catch (err) {

      //Unabled to log in
        dispatch(moviesFailure());
    }
};


//Creating a new movie
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
              
    //body "movie" is added.
    const res = await axios.post("/movies", movie, {
      headers: {
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

        // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODE0NDE2OCwiZXhwIjoxNjg4NTc2MTY4fQ.O5HvWBMguRGNA9TH_XTCRXCKtWRIUdnTRVk_PK6UbMc"

        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
        
      },
    });

    // will return data(as new movie)
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};


//delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
      await axios.delete("/movies/" + id, {
        headers: {
          // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      
        // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODE0NDE2OCwiZXhwIjoxNjg4NTc2MTY4fQ.O5HvWBMguRGNA9TH_XTCRXCKtWRIUdnTRVk_PK6UbMc"

        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"

        },
      });
      dispatch(deleteMovieSuccess(id));
    } catch (err) {
      dispatch(deleteMovieFailure());
    }
  };