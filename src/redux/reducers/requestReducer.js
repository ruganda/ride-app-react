import {
    REQUEST_RIDE,
    REQUEST_RIDE_PROCESSING,
    REQUEST_FAILED,
    UPDATE_REQUEST
} from '../actions/types';

const InitialState = {
    requestList:[],
    error:'',
    processing:false,
    status:''
}

export const RequestReducer = (state=InitialState, action) =>{
    switch(action.type){
        case REQUEST_RIDE:
            return { ...state, requestList:action.payload}

        case REQUEST_RIDE_PROCESSING:
            return { ...state, processing: action.payload}
        case REQUEST_FAILED:
            return { ...state, error: action.payload}
        case UPDATE_REQUEST:
            return {...state, status: action.payload}
        default:
            return  state 
    }
}
