import rideReducer from '../rideReducers'
import {
    CreateErrorAction,
    createRideAction,
    CreateProcessingAction,
    errorAction,
    retrieveRideAction,
    processingAction
} from '../../actions/rideActions';
describe('ride reducer', ()=>{
    let state
    beforeEach(()=>{

        state={
            ridesList: [],
            processing: false,
            error: '',
            CreateMessage:'',
            CreateRideProcessing:false,
            CreateRideError:''
        }
    })

    it('returns an initial state', ()=>{
        
        expect(rideReducer(undefined,{})).toEqual(state)
    })
    it('handles the creating ride action ', ()=>{
        const payload = 'ride created successfully'
        const newState =rideReducer(state, createRideAction(payload))
        expect(newState).toEqual({...state, CreateMessage:payload})
    })
     it('handles ride error actions', ()=>{
         const payload = 'ride creation failed'
         const newState = rideReducer(state, CreateErrorAction(payload))
         expect(newState).toEqual({...state, CreateRideError:payload})
     })
     it('handles processing action', ()=>{
        const newState= rideReducer(state, CreateProcessingAction(true))
        expect(newState).toEqual({...state, CreateRideProcessing:true})
     })
})

describe('test ride reducer', ()=>{
    let  state
    beforeEach(()=>{


        state={
            ridesList: [],
            processing: false,
            error: '',
            CreateMessage:'',
            CreateRideProcessing:false,
            CreateRideError:''
        }
    })

    it('returns an initial state', ()=>{
        
        expect(rideReducer(undefined,{})).toEqual({...state})
    })
    it('handles the login action ', ()=>{
        const payload = 'fetch rides successfullfy'
        const newState =rideReducer(state, retrieveRideAction(payload))
        expect(newState).toEqual({...state, ridesList:payload})
    })
     it('handles fetching rides error actions', ()=>{
         const payload = 'login failed'
         const newState = rideReducer(state, errorAction(payload))
         expect(newState).toEqual({...state, error:payload})
     })
     it('handles fetching processing action', ()=>{
        const newState= rideReducer(state, processingAction(true))
     })
})
