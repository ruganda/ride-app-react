import { REQUEST_RIDE, REQUEST_RIDE_PROCESSING, REQUEST_FAILED } from '../actions/types';

const InitialState = {
    requestList:[],
    error:'',
    processing:false
}

export const RequestReducer = (state=InitialState, action) =>{
    switch(action.type){
        case REQUEST_RIDE:
            console.log('>>>>>>>>>>><<<<<<< array......', action.payload,)
            return { ...state, requestList:action.payload}

        case REQUEST_RIDE_PROCESSING:
            console.log('processing...................')
            return { ...state, processing: action.payload}
        case REQUEST_FAILED:
            console.log('.............failed..................')
            return { ...state, error: action.payload}
        default:
            return  state 
    }
}
