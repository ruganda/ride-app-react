import {combineReducers} from 'redux'
import rideReducer from './rideReducers'
import {authReducer} from './signupReducer';

export default combineReducers({
    rides: rideReducer,
    auth: authReducer
});
