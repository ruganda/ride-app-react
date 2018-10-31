import {combineReducers} from 'redux'
import rideReducer from './rideReducers'
import {authReducer} from './signupReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
    rides: rideReducer,
    auth: authReducer,
    login: loginReducer,
});
