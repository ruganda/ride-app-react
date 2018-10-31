import {ERROR, PROCESSING, RETRIEVE_RIDES} from "../actions/types";

const initialState = {
    ridesList:[]
};

export default function (state = initialState, action){
    switch(action.type){
        case ERROR:
            return{...state, error: action.payload}

        case PROCESSING:
            return{...state, processing:action.processing}
        case RETRIEVE_RIDES:
            return {
                ...state,
                ridesList: action.payload
            };
        default:
            return state;

    }
};
