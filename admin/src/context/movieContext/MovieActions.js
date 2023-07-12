
// Starting
export const moviesStart = () =>({
    type :"MOVIES_START",
});
 
export const moviesSuccess = (movies) =>({
    type :"MOVIES_SUCCESS",
    payload: movies,
});

export const moviesFailure = () =>({
    type :"MOVIES_FALIURE",
});

// Create
  export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
  });
  
  export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    // will give a single movie.
    payload: movie,
  });
  
  export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
  });
  

// Update
  export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
  });
  
  export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
  });
  
  export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
  });
  

//Delete
  export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
  });
  
  // for deleting any movie we id is used.
  export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
  });
  
  export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
  });






