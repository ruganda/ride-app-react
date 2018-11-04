import React, { Component } from 'react';
import { connect } from "react-redux";
import { retrieveRides } from "../../redux/actions/rideActions";
import { handleRequests, handleRetrieveRequests} from '../../redux/actions/requestAction'
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import { NavLink } from 'react-router-dom';

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
        <td className='hide-on-small-only'>{ride.driver}</td>
        <td>< RequestButton driver = {ride.driver}
         handleClick ={()=>{this.props.handleRequests(ride.id)}}
         ManageRequest={()=>{this.props.handleRetrieveRequests(ride.id)}}/></td>
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
          <th>Travel Date</th>
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
      {localStorage.getItem('username')===props.driver?
      
      <NavLink className="btn waves-light responsive-btn" to='/requests' onClick = {props.ManageRequest} >MANAGE REQUESTS</NavLink >
      :
    <button className="btn blue waves-light responsive-btn " onClick = {props.handleClick} type="submit" name="action">JOIN RIDE
    <i class="material-icons right">send</i>
    </button>}
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

export default connect(mapStateToProps, {retrieveRides, handleRequests,handleRetrieveRequests})(Rides);
