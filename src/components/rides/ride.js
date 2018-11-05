import React, { Component } from 'react';
import { connect } from "react-redux";
import { retrieveRides, retrieveRideDetails } from "../../redux/actions/rideActions";
import PropTypes from 'prop-types';
import Spinner from '../spinner';

class Rides extends Component {


  componentDidMount = ()=> {
    this.props.retrieveRides();
  }

  handleClick = Id => e =>{
    e.preventDefault();
    this.props.retrieveRideDetails(Id)
    this.props.history.push(`/rides/${Id}`)
  }
  render() {
    const rideItems = this.props.rides.map(ride=>(

    <tr key ={ride.id}>
        <td>{ride.origin}</td>
        <td>{ride.destination}</td>
        <td className='hide-on-small-only'>{ride.driver}</td>
        <td><div  onClick={this.handleClick(ride.id)}>< RequestButton /></div></td>
    </tr>

    ));
    return (

      <div>
      <div className={'center'}>
          {this.props.processing &&<Spinner/>}
      </div>

        <table className='white'>
    <thead>
      <tr id>
          <th>Origin</th>
          <th>Destination</th>
          <th className='hide-on-small-only'>Driver</th>
          <th></th>
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

const RequestButton = (props) => {
  return ( 
    <div>
      <button className="btn waves-light responsive-btn" >DETAILS</ button >
      </div>

   );
}
 

Rides.PropTypes ={
  retrieveRides: PropTypes.func.isRequired,
  rides: PropTypes.array.isRequired

}

const mapStateToProps = state =>({
  rides: state.rides.ridesList,
  processing: state.rides.processing
});

export default connect(mapStateToProps, {retrieveRides, retrieveRideDetails})(Rides);
