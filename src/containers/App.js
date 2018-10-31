import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {Provider} from 'react-redux'
import  Rides  from "../components/ride";
import '../App.css';
import NavBar from "../components/navBar";
import HomePage from "../components/Home";
import RegisterForm from '../components/Register';
import store from '../redux/store/Store'


class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <div className="App">
          <NavBar />
          <Route exact path='/' component={ ({...props}) => {
            return <HomePage {...props} />;
          } }/>
          <Route path='/register' component={RegisterForm}/>
          <Route path='/rides' component={Rides }/>

      </div>
      </Provider>
    );
  }
};

export default App;
