import React, { Component } from 'react';
// import {Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import  Rides  from "../components/rides/ride";
import '../App.css';
import NavBar from "../components/navBar";
import HomePage from "../components/Home";
import RegisterForm from '../components/auth/Register';
import Login from '../components/auth/login';
import store from '../redux/store/Store'
import CreateRide from '../components/rides/createRides';
import Requests from '../components/requests/request'


class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <Router>
      <Switch>
      <div className="App">
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/register' component={RegisterForm}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/rides' component={Rides }/>
          <Route exact path='/createRide' component={CreateRide}/>
          <Route exact path='/requests' component={Requests}/>
      </div>
      </Switch>
      </Router>
      </Provider>
    );
  }
};

export default App;
