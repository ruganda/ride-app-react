import React from 'react'

const HomePage =(props)=>{
    console.log(props, 'props');
  return(
      <section id="showcase">
          <div className="jumbotron">
              <h1>RIDE MY WAY</h1>
              <p>Ride-my App is a carpooling application that provides drivers </p>
              <p>with the ability to create ride offers and passengers </p>
              <p>to join available ride offers</p>
          </div>
      </section>
  );
};

export default HomePage
