import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '../../../globals';
import { handleRetrieveRequests, handleRequests } from '../requestAction';
import { REQUEST_RIDE_PROCESSING, REQUEST_RIDE, REQUEST_FAILED } from '../types';



describe('test create ride actions', ()=>{
    let store; let response_data; let httpMock; let requestUrl;
    const flushAllPromises = ()=> new Promise(resolve =>setImmediate(resolve))

    beforeEach(() => {
        const mockStore = configureMockStore();
        store = mockStore({ dispatch: jest.fn() });
        response_data = { message:'the response message' };
        httpMock = new MockAdapter(axiosInstance);
      });
      
    it('should retrieve a request successfully', async()=>{
        httpMock.onGet(`/users/rides/1/requests`).reply(200, response_data)
        handleRetrieveRequests(1)(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: REQUEST_RIDE_PROCESSING, payload: true },
            { type: REQUEST_RIDE, payload: response_data},
            { type: REQUEST_RIDE_PROCESSING, payload: false },
          ]);  
    })

    it('should fail to retrieve a ride ', async()=>{
        httpMock.onGet(`/users/ride/100000009/requests`).reply(404, response_data)
        handleRetrieveRequests(100000009)(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()[1].type).toEqual(REQUEST_FAILED);  
    })

    it('should send requests', async()=>{
        httpMock.onPost(`rides/${1}/requests`).reply(201, response_data)
        handleRequests(1)(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: REQUEST_RIDE, payload: response_data.message },
            
          ]);  
    })

    
})