
import CreateRides from '../rides/createRides'
import Ride from '../rides/ride'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme , { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

describe('test the create ride component renders without crashing', ()=>{
    const storeFake = state => {
        return {
          subscribe:jest.fn() , 
          default: jest.fn(),
          getState: () => state,
        };
      }

    const store = storeFake({rides:{processing:false, CreateMessage:[], error:""}});
    const wrapper = mount(
        <Provider store={store}>
            <CreateRides store={store}/>
        </Provider>
    ) 
   const  container = wrapper.find(CreateRides)
    
   it('should render the container ', () => {
    expect(container.length).toBeTruthy();
  });
    
    it('should submit the form successfully', ()=>{
        const component = mount(<CreateRides store = {store}/>)
        component.find('#addRide').simulate('submit')
    })

    it('should handel form change the form successfully', ()=>{
        const component = mount(<CreateRides store = {store}/>)
        component.find('#origin').simulate('change')
    })
})


describe('test the  rides component renders without crashing', ()=>{
    const storeFake = state => {
        return {
          subscribe:jest.fn() , 
          default: jest.fn(),
          dispatch: jest.fn(),
          getState: () => state,
        };
      }

    const store = storeFake({rides:{ridesList:[], processing:""}});
        const retrieveRides = jest.fn()
    
    const wrapper = mount(
        <Provider store={store}>
            <Ride retrieveRides = {retrieveRides} store={store}/>
        </Provider>
    ) 
   const  container = wrapper.find(Ride)
    
   it('should render the container ', () => {
    expect(container.length).toBeTruthy();
  });
    
})