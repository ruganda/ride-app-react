import {ERROR, PROCESSING, RETRIEVE_RIDES} from "../actions/types";

const initialState = {
    ridesList:[]
};

export default function (state = initialState, action){
    switch(action.type){
        case ERROR:
            console.log('.......error')
            return{...state, error: action.payload}

        case PROCESSING:
            console.log('.........processing')
            return{...state, processing:action.processing}
        case RETRIEVE_RIDES:
            console.log('retrieving....Rides')
            return {
                ...state,
                ridesList: action.payload
            };
        default:
            console.log(".....default......")
            console.log({...state})
            return state;

    }
};
