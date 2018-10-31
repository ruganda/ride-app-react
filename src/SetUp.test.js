import Enzyme , { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from "./containers/App";

Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
 shallow(<App />);
});
