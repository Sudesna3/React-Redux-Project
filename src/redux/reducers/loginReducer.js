import  login_types  from "../constants/loginConstant";

let {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} = login_types;

export const authInitialState = {
   isAuthenticate: false,
   userinfo: {},
   error: null
}

export const authLoginReducer = (state = authInitialState, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
        return {
            ...state,
            isAuthenticated: true
        };                                          
    case LOGIN_SUCCESS: 
        return {
            ...state,
            isAuthenticated: true,
            userinfo: action.payload,
            //userinfo: action.data,
            error: null
        };
    case LOGIN_FAILED:
        return {isAuthenticated: false};      
    default:
        return state;
  }
}




