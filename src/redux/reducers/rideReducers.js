import {
    ERROR,
    PROCESSING,
    RETRIEVE_RIDES,
    CREATE_RIDE,
    CREATE_RIDE_ERROR,
    CREATE_RIDE_PROCESSING
} from '../actions/types';

const initialState = {
    ridesList: [],
    processing: false,
    error: '',
    CreateMessage:'',
    CreateRideProcessing:false,
    CreateRideError:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ERROR:
            return { ...state, error: action.payload }

        case PROCESSING:
            return { ...state, processing: action.processing }
        case RETRIEVE_RIDES:
            return {
                ...state,
                ridesList: action.payload
            };
        case CREATE_RIDE:
        return {
            ...state,
            CreateMessage: action.payload
        }
        case CREATE_RIDE_ERROR:
            return { ...state, CreateRideError:action.payload, CreateMessage:'' }
        case CREATE_RIDE_PROCESSING:
            return{ ...state,CreateRideProcessing:action.payload}
        default:
            return state;

    }
};
