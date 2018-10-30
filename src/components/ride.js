import React, { Component } from 'react';
import { connect } from "react-redux";
import { retrieveRides } from "../redux/actions/rideActions";
import PropTypes from 'prop-types';
import '../App.css';
import '../style.css'

class Rides extends Component {

  componentDidMount() {
    console.log('mouting.........')
    this.props.retrieveRides();
  }
  render() {
    console.log(this.props.rides)
    const rides= []
    const rideItems = rides.map(ride=>(
      <div className="card" key ={ride.id}>
          <div  className="ride-info" >
              <span>No {ride.id}</span>
              <p> from {ride.origin}</p>
              <p>to {ride.destination}</p>
              <p> by {ride.driver}</p>
              <p className = "status-accepted" >view requests</p>
              <p className="details-button" >View details</p>
          </div>
    </div>
    ));
    return (
      <div className="card" id ="card">
       {rideItems}
      </div>
    );
  }
};

Rides.PropTypes ={
  retrieveRides: PropTypes.func.isRequired,
  rides: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
  rides: state.rides,

});

export default connect(mapStateToProps, {retrieveRides})(Rides);
