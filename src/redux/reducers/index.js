import {combineReducers} from 'redux'
import rideReducer from './rideReducers'
import {authReducer} from './signupReducer';
import { loginReducer } from './loginReducer';
import { RequestReducer } from './requestReducer';

export default combineReducers({
    login: loginReducer,
    auth: authReducer,
    rides: rideReducer,
    requests:RequestReducer
});
