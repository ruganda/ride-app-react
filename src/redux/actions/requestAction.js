import {axiosInstance} from "../../globals"
import { REQUEST_RIDE, REQUEST_RIDE_PROCESSING, REQUEST_FAILED, UPDATE_REQUEST } from './types';
import M from 'materialize-css'

export const updateRequestAction = payload=>({
    type: UPDATE_REQUEST,
    payload
})

export const  RequestAction = payload =>({
    type: REQUEST_RIDE,
    payload
});

export const requestProcessingAction = payload=>({
    type: REQUEST_RIDE_PROCESSING,
    payload
})

export const requestFailedAction = payload =>({
    type: REQUEST_FAILED,
    payload
})

export const handleRequests = (ride_id)=> async (dispatch) => {
    return await(
    axiosInstance.post(`rides/${ride_id}/requests`)
        .then((response) => {
            dispatch(RequestAction(response.data.message));
            M.toast({html: `${response.data.message}`, classes: 'green darken-4', });

        })
        .catch((error) => {
            console.log(error)
            M.toast({html: `${error.response.data.message}`, classes: ' red darken-4', });
            
        })
    );
};

export const handleRetrieveRequests = (rideId)=>  async(dispatch) => {

    dispatch(requestProcessingAction(true));
        axiosInstance.get(`/users/rides/${rideId}/requests`)
            .then((response) => {
                dispatch(RequestAction(response.data));
                dispatch(requestProcessingAction(false));
            })
            .catch((error) => {
                dispatch(requestFailedAction(error.response));
                dispatch(requestProcessingAction(false));
            })

};



export const handleRequestUpdate = (requestData, rideId,rId)=> async (dispatch) => {
    dispatch(requestProcessingAction(true));
    return await(
    axiosInstance.put(`/users/rides/${rideId}/requests/${rId}`,requestData )
        .then((response) => {
            dispatch(updateRequestAction(response.data.status));

            dispatch(requestProcessingAction(false));
            M.toast({html: `${response.data.message}`, classes: 'green darken-4', });
        })
        .catch((error) => {
            dispatch(updateRequestAction(error.response.data.message));
            dispatch(requestProcessingAction(false));
        })
    );
};


