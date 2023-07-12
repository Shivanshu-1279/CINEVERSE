// Reducers bascially take aur actions and return our context states according to it
 

const AuthReducer = (state,action) =>{

    // it will see what is the action type
    switch(action.type){
      case "LOGIN_START":
        return {
            user: null,
            isFetching:true,
            error:false,
        };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching:false,
                error:false,
            };        
        case "LOGIN_FAILURE":
                return {
                    user: null,
                    isFetching:false,
                    error:true,
                };
     case "LOGOUT":
                return {
                    user: null,
                    isFetching:false,
                    error:false,
                };              
                
        default:
                    return { ...state};
        }
}


export default AuthReducer;