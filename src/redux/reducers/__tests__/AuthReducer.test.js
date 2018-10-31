import { authReducer } from '../signupReducer';
import { registerAction,AutherrorAction,AuthprocessingAction  } from '../../actions/AuthActions';
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
