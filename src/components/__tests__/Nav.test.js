import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../navBar'
import Enzyme , {shallow } from 'enzyme';
import HomePage from '../Home';
import Spinner from '../spinner';
Enzyme.configure({ adapter: new Adapter() });



describe('test the  request component renders without crashing', ()=>{

  it('should render the nav Bar', ()=>{
    const wrapper = shallow(<NavBar />)
    expect(wrapper.length).toBeTruthy();
})

it('should render the Homepage', ()=>{
    const wrapper = shallow(<HomePage  />)
    expect(wrapper.length).toBeTruthy();
})

it('should render the  spinner', ()=>{
    const wrapper = shallow(<Spinner  />)
    expect(wrapper.length).toBeTruthy();
})
})
