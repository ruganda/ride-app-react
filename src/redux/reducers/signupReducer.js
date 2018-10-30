import {ERROR, PROCESSING, REGISTER_USER} from "../actions/types";


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
        message: action.payload
      };
    case ERROR:
        return{...state, error:action.payload};
      case PROCESSING:
        return {...state, processing:action.payload}
    default:
      return state;
  }
}
