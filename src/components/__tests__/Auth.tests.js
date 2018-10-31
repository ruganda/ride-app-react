import RegisterForm from '../auth/Register'
import Login from '../auth/login'
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
            <RegisterForm  store={store}/>
        </Provider>
    ) 
   const  container = wrapper.find(RegisterForm)
    
   it('should render the container ', () => {
    expect(container.length).toBeTruthy();
  });
    
    it('should submit the form successfully', ()=>{
        const component = mount(<RegisterForm store = {store}/>)
        component.find('#registerUser').simulate('submit')
    })
})


describe('test the login component renders without crashing', ()=>{
    const storeFake = state => {
        return {
          subscribe:jest.fn() , 
          default: jest.fn(),
          getState: () => state,
        };
      }

    const store = storeFake({login:{loginProcessing:false, loginMessage:"", loginError:""}});
    const wrapper = mount(
        <Provider store={store}>
            <Login  store={store}/>
        </Provider>
    ) 
   const  container = wrapper.find(Login)
    
   it('should render the container ', () => {
    expect(container.length).toBeTruthy();
  });
    
    it('should submit the form successfully', ()=>{
        const component = mount(<Login store = {store}/>)
        component.find('#loginUser').simulate('submit')
    })
})