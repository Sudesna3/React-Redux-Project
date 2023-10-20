import  login_types  from "../constants/loginConstant";

let {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} = login_types;

export const authInitialState = {
   isAuthenticate: false
}

export const authLoginReducer = (state = authInitialState, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
        return {isAuthenticated: false};
    case LOGIN_SUCCESS: 
        return {isAuthenticated: true};
    case LOGIN_FAILED:
        return {isAuthenticated: false};      
    default:
        return state;
  }
}




