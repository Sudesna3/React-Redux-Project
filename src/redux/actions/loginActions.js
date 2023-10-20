import  login_types  from "../constants/loginConstant";

let {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} = login_types;

const requestLoginApi = () =>{
    return dispatch => {
        dispatch({type: LOGIN_REQUEST})
    }
}

const successLoginApi = () =>{
    return dispatch => {
        dispatch({type: LOGIN_SUCCESS})
    }
}

const failedtLoginApi = () =>{
    return dispatch => {
        dispatch({type: LOGIN_FAILED})
    }
}