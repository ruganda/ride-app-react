import { RequestReducer } from '../requestReducer';
import {
    RequestAction,
    requestFailedAction,
    requestProcessingAction
} from '../../actions/requestAction';


describe('ride reducer', ()=>{
    let state
    beforeEach(()=>{

        state={
            requestList:[],
            error:'',
            processing:false,
            status:''
        }
    })

    it('returns an initial state', ()=>{
        
        expect(RequestReducer (undefined,{})).toEqual(state)
    })
    it('handles the creating ride action ', ()=>{
        const payload = 'ride created successfully'
        const newState =RequestReducer (state,  RequestAction(payload))
        expect(newState).toEqual({...state, requestList:payload})
    })
     it('handles request error actions', ()=>{
         const payload = 'failed'
         const newState = RequestReducer (state, requestFailedAction (payload))
         expect(newState).toEqual({...state, error:payload})
     })
     it('handles processing action', ()=>{
        const newState= RequestReducer (state,  requestProcessingAction(true))
        expect(newState).toEqual({...state, processing:true})
     })
})