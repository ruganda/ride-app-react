import { REGISTER_USER, AUTH_ERROR, AUTH_PROCESSING } from "./types";
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
