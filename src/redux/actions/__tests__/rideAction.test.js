import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '../../../globals';
import { CreateRides, retrieveRides } from '../rideActions';
import {
    PROCESSING,
    CREATE_RIDE,
    CREATE_RIDE_PROCESSING,
    CREATE_RIDE_ERROR,
    RETRIEVE_RIDES,
    ERROR
} from '../types';


describe('test create ride actions', ()=>{
    let store; let response_data; let httpMock; let requestUrl;
    const flushAllPromises = ()=> new Promise(resolve =>setImmediate(resolve))
    const requestData = {origin:'testOrigin', destination:'testDestination', date:'2019/08/12 02:23:11'}

    beforeEach(() => {
        const mockStore = configureMockStore();
        store = mockStore({ auth: jest.fn() });
        requestUrl = '/users/rides/';
        response_data = { message:'the response message' };
        httpMock = new MockAdapter(axiosInstance);
      });
      
    it('should create a ride successfully', async()=>{
        httpMock.onPost(requestUrl).reply(201, response_data)
        CreateRides(requestData)(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: CREATE_RIDE_PROCESSING, payload: true },
            { type: CREATE_RIDE, payload: response_data.message},
            { type: CREATE_RIDE_PROCESSING, payload: false },
          ]);  
    })

    it('should fail to create a ride ', async()=>{
        httpMock.onPost(requestUrl).reply(400, response_data)
        CreateRides({origin:'',destination:'', date:''})(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: CREATE_RIDE_PROCESSING, payload: true },
            { type: CREATE_RIDE_ERROR, payload: response_data.message},
            { type: CREATE_RIDE_PROCESSING, payload: false },
          ]);  
    })

    it('should fetch rides successfully', async()=>{
        httpMock.onGet('/rides/').reply(200, response_data)
        retrieveRides()(store.dispatch);
        await flushAllPromises();
        expect(store.getActions()).toEqual([
            { type: PROCESSING, payload: true },
            { type: RETRIEVE_RIDES, payload: response_data},
            { type: PROCESSING, payload: false },
          ]);  
    })

    
})
