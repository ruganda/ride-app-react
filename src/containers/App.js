import React, { Component } from 'react';
import {Route} from "react-router-dom";
import  Rides  from "../components/ride";
import '../App.css';
import NavBar from "../components/navBar";
import HomePage from "../components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Route paths ='/' component={ HomePage }/>
          <Route path='/rides' component={Rides }/>

      </div>
    );
  }
};

export default App;
