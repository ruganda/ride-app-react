import React, { Component } from 'react';
import { connect } from "react-redux";
import { retrieveRides } from "../../redux/actions/rideActions";
import PropTypes from 'prop-types';
import Spinner from '../spinner';

class Rides extends Component {


  componentDidMount = ()=> {
    this.props.retrieveRides();
  }
  render() {
    const rideItems = this.props.rides.map(ride=>(

    <tr key ={ride.id}>
        <td>{ride.origin}</td>
        <td>{ride.destination}</td>
        <td>{ride.date}</td>
        <td>{ride.driver}</td>
    </tr>

    ));
    return (

      <div>
      <div className={'center'}>
          {this.props.processing &&<Spinner/>}
      </div>

        <table className='white responsive-table'>
    <thead>
      <tr>
          <th>Origin</th>
          <th>Destination</th>
          <th>Travel Date</th>
          <th>Driver</th>
      </tr>
    </thead>

    <tbody>

    {rideItems}
    </tbody>
  </table>

      </div>
    );
  }
};

Rides.PropTypes ={
  retrieveRides: PropTypes.func.isRequired,
  rides: PropTypes.array.isRequired

}

const mapStateToProps = state =>({
  rides: state.rides.ridesList,
  processing: state.rides.processing
});

export default connect(mapStateToProps, {retrieveRides})(Rides);
