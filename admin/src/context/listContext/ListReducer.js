const ListReducer = (state,action) => {

    // it will see what is the action type
    switch(action.type) {
      // case "LISTS_START":
      //   return {
      //       lists: [],
      //       isFetching:true,
      //       error:false,
      //   };
      //   case "LISTS_SUCCESS":
      //       return {
      //           lists: action.payload,
      //           isFetching:false,
      //           error:false,
      //       };        
      //   case "LISTS_FALIURE":
      //           return {
      //               lists: [],
      //               isFetching:false,
      //               error:true,
      //           };           


      case "GET_LISTS_START":
        return {
          lists: [],
          isFetching: true,
          error: false,
        };
      case "GET_LISTS_SUCCESS":
        return {
          lists: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_LISTS_FAILURE":
        return {
          lists: [],
          isFetching: false,
          error: true,
        };

                case "CREATE_LIST_START":
                    return {
                      ...state,
                      isFetching: true,
                      error: false,
                    };
                  case "CREATE_LIST_SUCCESS":
                    return {
                      lists: [...state.lists, action.payload],
                      isFetching: false,
                      error: false,
                    };
                  case "CREATE_LIST_FAILURE":
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


                  case "DELETE_LIST_START":
                    return {
            // taking movies present in current state
                      ...state,
                      isFetching: true,
                      error: false,
                    };
                  case "DELETE_LIST_SUCCESS":
                    return {
                        // when it is success it will look at the movie array and filter movie , if the movie ID is not equal to id than it will stay there only.
                      lists: state.lists.filter((list) => list._id !== action.payload),
                      isFetching: false,
                      error: false,
                    };
                  case "DELETE_LIST_FAILURE":
                    return {
                      ...state,
                      isFetching: false,
                      error: true,
                    };                
                
        default:
                    return { ...state};
        }
}

export default ListReducer;
