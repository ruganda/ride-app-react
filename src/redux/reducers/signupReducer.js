import {AUTH_ERROR, AUTH_PROCESSING, REGISTER_USER} from "../actions/types";


const initialState = {
    message: '',
    error:'',
    processing:false
};

export const authReducer = (state = initialState, action)=> {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        message: action.payload,
        processing:false
      };
    case AUTH_ERROR:
        return{...state, error:action.payload, processing:false};
      case AUTH_PROCESSING:
        return {...state, processing:action.payload, message:'',error:''}
    default:
      return state;
  }
}
