import {combineReducers} from 'redux'
import rideReducer from './rideReducers'
import {authReducer} from './signupReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
    auth: authReducer,
    login: loginReducer,
    rides: rideReducer,
});
