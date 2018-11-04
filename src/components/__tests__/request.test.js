
import Request, { RequestButton } from '../requests/request';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme , {shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });



describe('test the  request component renders without crashing', ()=>{
    const storeFake = state => {
        return {
          subscribe:jest.fn() , 
          default: jest.fn(),
          dispatch: jest.fn(),
          getState: () => state,
        };
      }

    const store = storeFake({requests:{requestList:[], processing:""}});
    
    const wrapper = mount(
        <Provider store={store}>
            <Request store={store}/>
        </Provider>
    ) 
   const  container = wrapper.find(Request)
    
   it('should render the container ', () => {
    expect(container.length).toBeTruthy();
  });
  it('should render the button succesfully', ()=>{
      const wrapper = shallow(<RequestButton/>)
      expect(wrapper.length).toBeTruthy();
  })
    
})