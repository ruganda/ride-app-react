import { RETRIEVE_RIDES, ERROR , PROCESSING} from "./types";
import {axiosInstance} from "../../globals"

const retrieveRideAction = (payload) =>({
   type: RETRIEVE_RIDES,
   payload
})

const errorAction = payload =>({
    type:ERROR,
    payload
})

const processingAction =payload=>({
    type: PROCESSING,
    payload
})


export const retrieveRides = ()=> async (dispatch) => {

    dispatch(processingAction(true));
    console.log('.........axios fetching')
    return await (
        axiosInstance.get('/rides/')
            .then((response) => {
                dispatch(retrieveRideAction(response.data));
                dispatch(processingAction(false));
            })
            .catch((error) => {
                dispatch(errorAction(error.response));
            })
    );
};
