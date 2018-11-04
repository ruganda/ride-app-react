import React from 'react'
import { NavLink } from 'react-router-dom';

const HomePage =(props)=>{
  return(
      <section id="showcase">
          <div className="container">
              <br/><br/>
              <div className='z-depth-5 jumbotron'>
                  <h1 className="header center teal-text text-lighten-2">Ride My Way</h1>
                  <div className="row center">
                      <h5 className="header center col s12 teal-text text-lighten-2">Ride-my App is a carpooling application that
                          provides drivers with the ability to </h5>
                      <h5 className="header col s12 center teal-text text-lighten-2">create ride offers and passengers to  join
                      available ride offers</h5>
                  </div>

              </div>
              <br/><br/>
              <div className="row center">
                  <NavLink  to='/register'
                            className="btn-large  waves-light teal lighten-1">Get Started</NavLink>
              </div>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


      </section>
  );
};

export default HomePage

