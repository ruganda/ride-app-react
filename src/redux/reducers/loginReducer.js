import { LOGIN, LOGIN_ERROR, LOGIN_PROCESSING, LOGIN_STATUS} from "../actions/types";

const initialState = {
    loginMessage:'',
    loginError:'',
    loginProcessing:false,
};

export const loginReducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOGIN:
          return {...state, loginMessage: action.payload}
        case LOGIN_ERROR:
          return { ...state, loginError:action.payload}
        case LOGIN_PROCESSING:
          return {...state , loginProcessing: action.payload}
        case LOGIN_STATUS:
          return {...state, isLoggedIn: action.payload}
      default:
        return state;
    }
  }