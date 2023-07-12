const MovieReducer = (state,action) => {

    // it will see what is the action type
    switch(action.type) {
      case "MOVIES_START":
        return {
            movies: [],
            isFetching:true,
            error:false,
        };
        case "MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching:false,
                error:false,
            };        
        case "MOVIES_FALIURE":
                return {
                    movies: [],
                    isFetching:false,
                    error:true,
                };           


                case "CREATE_MOVIE_START":
                    return {
                      ...state,
                      isFetching: true,
                      error: false,
                    };
                  case "CREATE_MOVIE_SUCCESS":
                    return {
                      movies: [...state.movies, action.payload],
                      isFetching: false,
                      error: false,
                    };
                  case "CREATE_MOVIE_FAILURE":
                    return {
                      ...state,
                      isFetching: false,
                      error: true,
                    };


                  case "UPLOAD_MOVIE_START":
                    return {
                      ...state,
                      isFetching: true,
                      error: false,
                    };
                  case "UPLOAD_MOVIE_SUCCESS":
                    return {
                      movies: state.movies.map(

                        // if( they ids are equal then return action.payload)
                        (movie) => movie._id === action.payload._id && action.payload
                      ),
                      isFetching: false,
                      error: false,
                    };
                  case "UPLOAD_MOVIE_FAILURE":
                    return {
                      ...state,
                      isFetching: false,
                      error: true,
                    };


                  case "DELETE_MOVIE_START":
                    return {
            // taking movies present in current state
                      ...state,
                      isFetching: true,
                      error: false,
                    };
                  case "DELETE_MOVIE_SUCCESS":
                    return {
                        // when it is success it will look at the movie array and filter movie , if the movie ID is not equal to id than it will stay there only.
                      movies: state.movies.filter((movie) => movie._id !== action.payload),
                      isFetching: false,
                      error: false,
                    };
                  case "DELETE_MOVIE_FAILURE":
                    return {
                      ...state,
                      isFetching: false,
                      error: true,
                    };                
                
        default:
                    return { ...state};
        }
}

export default MovieReducer;
