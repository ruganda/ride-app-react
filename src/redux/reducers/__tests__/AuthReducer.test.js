import { authReducer } from '../signupReducer';
import {
    registerAction,
    AutherrorAction,
    AuthprocessingAction,
    loginAction,
    LoginErrorAction,
    loginProcessing
} from '../../actions/AuthActions';
import { loginReducer } from '../loginReducer';
describe('auth reducer', ()=>{
    let userData, state
    beforeEach(()=>{
        userData = {
            name:'test nama',
            username:'testUsername',
            password:'testPassword'
        }

        state={
            message:'',
            processing:false,
            error:''
        }
    })

    it('returns an initial state', ()=>{
        
        expect(authReducer(undefined,{})).toEqual({"error": "", "message": "", "processing": false})
    })
    it('handles registration action ', ()=>{
        const payload = 'registration successfull'
        const newState =authReducer(state, registerAction(payload))
        expect(newState).toEqual({...state, message:payload})
    })
     it('handles auth error actions', ()=>{
         const payload = 'registration failed'
         const newState = authReducer(state, AutherrorAction(payload))
         expect(newState).toEqual({...state, error:payload})
     })
     it('handles processing action', ()=>{
        const newState= authReducer(state, AuthprocessingAction(true))
        expect(newState).toEqual({...state, processing:true})
     })
})

describe('test login reducer', ()=>{
    let  state
    beforeEach(()=>{


        state={
            loginMessage:'',
            loginProcessing:false,
            loginError:''
        }
    })

    it('returns an initial state', ()=>{
        
        expect(loginReducer(undefined,{})).toEqual({...state})
    })
    it('handles the login action ', ()=>{
        const payload = 'login successful'
        const newState =loginReducer(state, loginAction(payload))
        expect(newState).toEqual({...state, loginMessage:payload})
    })
     it('handles login error actions', ()=>{
         const payload = 'login failed'
         const newState = loginReducer(state, LoginErrorAction(payload))
         expect(newState).toEqual({...state, loginError:payload})
     })
     it('handles login processing action', ()=>{
        const newState= loginReducer(state, loginProcessing(true))
        expect(newState).toEqual({...state, loginProcessing:true})
     })
})
