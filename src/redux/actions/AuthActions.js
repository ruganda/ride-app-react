import { REGISTER_USER } from "./types";
import {axiosInstance} from "../../globals";
import {errorAction, processingAction} from "./index";


const registerAction=payload=>({
    type: REGISTER_USER,
    payload
})

// export const registerUser = signupData => dispatch => {
//     console.log('..........fetching.....')
//     fetch("https://rugandaride.herokuapp.com/api/v2/auth/register", {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(signupData)
//     })
//       .then(response => {
//           console.log('logindg', response)
//
//       })
//
//   };

export const registerUser = (signUp)=> async (dispatch) => {

    dispatch(processingAction(true));
    console.log('.........axios fetching')
    return await (
        axiosInstance.post('/auth/register', signUp)
            .then((response) => {
                console.log(response.data)
                dispatch(registerAction(response.data.message));
                dispatch(processingAction(false));
            })
            .catch((error) => {
                console.log(error)
                // dispatch(errorAction(error.response));
            })
    );
};
