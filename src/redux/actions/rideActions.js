import {
    RETRIEVE_RIDES,
    ERROR,
    PROCESSING,
    CREATE_RIDE,
    CREATE_RIDE_ERROR,
    CREATE_RIDE_PROCESSING
} from './types';
import {axiosInstance} from "../../globals"

export const retrieveRideAction = (payload) =>({
   type: RETRIEVE_RIDES,
   payload
})

export const createRideAction = (payload) =>({
    type: CREATE_RIDE,
    payload
})

export const errorAction = payload =>({
    type:ERROR,
    payload
})

export const processingAction =payload=>({
    type: PROCESSING,
    payload
})

export const CreateErrorAction = (payload) =>({
    type:CREATE_RIDE_ERROR,
    payload
})

export const CreateProcessingAction =payload=>({
    type: CREATE_RIDE_PROCESSING,
    payload
})



export const retrieveRides = ()=> async (dispatch) => {

    dispatch(processingAction(true));
        axiosInstance.get('/rides/')
            .then((response) => {
                dispatch(retrieveRideAction(response.data));
                dispatch(processingAction(false));
            })
            .catch((error) => {
                dispatch(errorAction(error.response));
                dispatch(processingAction(false));
            })

};


export const CreateRides = (rideData)=> async (dispatch) => {
    dispatch(CreateProcessingAction(true));
    return await(
    axiosInstance.post('/users/rides/', rideData)
        .then((response) => {
            dispatch(createRideAction(response.data.message));
            dispatch(CreateProcessingAction(false));
        })
        .catch((error) => {
            dispatch(CreateErrorAction(error.response.data.message));
            dispatch(CreateProcessingAction(false));
        })
    );
};
