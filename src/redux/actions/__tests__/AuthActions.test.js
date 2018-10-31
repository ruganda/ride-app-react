import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '../../../globals';
import { registerUser } from '../AuthActions';
import { REGISTER_USER, AUTH_ERROR, AUTH_PROCESSING } from '../types';

describe('test registration actions', ()=>{
    let store; let response_data; let httpMock; let requestUrl;
    const flushAllPromises = ()=> new Promise(resolve =>setImmediate(resolve))
    const requestData = {name:'test', username:'testuser', password:'password'}

    beforeEach(() => {
        const mockStore = configureMockStore();
        store = mockStore({ auth: jest.fn() });
        requestUrl = '/auth/register';
        response_data = { message:'the response message' };
        httpMock = new MockAdapter(axiosInstance);
      });
      
    it('should register a user successfully', async()=>{
        httpMock.onPost(requestUrl).reply(201, response_data)
        registerUser(requestData)(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: AUTH_PROCESSING, payload: true },
            { type: REGISTER_USER, payload: response_data.message},
            { type: AUTH_PROCESSING, payload: false },
          ]);  
    })

    it('should fail to register a  user', async()=>{
        httpMock.onPost(requestUrl).reply(400, response_data)
        registerUser({name:'',username:'', password:''})(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: AUTH_PROCESSING, payload: true },
            { type: AUTH_ERROR, payload: response_data.message},
            { type: AUTH_PROCESSING, payload: false },
          ]);  
    })

    

})
