import {
    REGISTER_USER,
    AUTH_ERROR,
    AUTH_PROCESSING,
    LOGIN,
    LOGIN_ERROR,
    LOGIN_STATUS,
    LOGIN_PROCESSING
} from './types';
import {axiosInstance} from "../../globals";


export const registerAction=payload=>({
    type: REGISTER_USER,
    payload
})

export const AutherrorAction = payload =>({
    type:AUTH_ERROR,
    payload
})

export const AuthprocessingAction =payload=>({
    type: AUTH_PROCESSING,
    payload
})
 export const loginAction= payload=>({
     type:LOGIN,
     payload
 })

 export const LoginErrorAction = payload=>({
     type:LOGIN_ERROR,
     payload
 })

 export const loginProcessing = payload=>({
    type: LOGIN_PROCESSING,
    payload
})
//  export const LoginStatus= payload=>({
//      type:LOGIN_STATUS,
//      payload
//  })

export const registerUser = (signUp)=> async (dispatch) => {

    dispatch(AuthprocessingAction(true));
    return await (
        axiosInstance.post('/auth/register', signUp)
            .then((response) => {
                console.log(response.data)
                dispatch(registerAction(response.data.message));
                dispatch(AuthprocessingAction(false));
                
            })
            .catch((error) => {
                dispatch(AutherrorAction(error.response.data.message));
                dispatch(AuthprocessingAction(false));
                
            })
    );
};


export const handleLogin = (loginData)=> async (dispatch) => {

    dispatch(loginProcessing(true));
    return await (
        axiosInstance.post('/auth/login', loginData)
            .then((response) => {
                console.log(response.data.token)
                localStorage.setItem('token',response.data.token)
                dispatch(loginAction(response.data.message));
                dispatch(loginProcessing(false));
                
            })
            .catch((error) => {
                console.log(error.response.data)
                dispatch(LoginErrorAction(error.response.data.message));
                dispatch(loginProcessing(false));
                
            })
    );
};