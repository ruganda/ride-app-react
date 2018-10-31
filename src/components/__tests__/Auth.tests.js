import RegisterForm from '../Register'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme , { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

describe('test the sign up component renders without crashing', ()=>{
    const storeFake = state => {
        return {
          subscribe:jest.fn() , 
          default: jest.fn(),
          getState: () => state,
        };
      }

    const store = storeFake({auth:{processing:false, message:"", error:""}});
    const wrapper = mount(
        <Provider store={store}>
            <RegisterForm redisterUser={jest.fn()} store={store}/>
        </Provider>
    ) 
   const  container = wrapper.find(RegisterForm)
    
   it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
  });
    
    it('should submit the form successfully', ()=>{
        const component = mount(<RegisterForm store = {store}/>)
        component.find('#registerUser').simulate('submit')
    })
})