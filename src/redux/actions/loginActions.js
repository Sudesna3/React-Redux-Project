import  login_types  from "../constants/loginConstant";

let {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} = login_types;

const getSuccess = (data, type) => {
return {
    data,
    type
}
}

const requestLoginApi = () => {
    return dispatch => {
        dispatch({type: LOGIN_REQUEST})
    }
}

const successLoginApi = (email,password) =>{
    return  (
        //getSuccess(userdata, LOGIN_SUCCESS)
       { type: LOGIN_SUCCESS,
        payload: email, password}
    
    )
}

const failedtLoginApi = () =>{
    return dispatch => {
        dispatch({type: LOGIN_FAILED})
    }
}

export {requestLoginApi, successLoginApi, failedtLoginApi};
