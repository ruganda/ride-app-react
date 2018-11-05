import React, { Component} from 'react'
import { connect } from "react-redux";
import { retrieveRideDetails } from '../../redux/actions/rideActions';
import Spinner from '../spinner';
import { handleRequests, handleRetrieveRequests} from '../../redux/actions/requestAction'

class RideDetails extends Component {

    componentDidMount() {
        console.log(localStorage.getItem('username'))
        this.props.retrieveRideDetails(this.props.match.params.Id)
    }
    manageRequests=rideId=>e=>{
        e.preventDefault();
        console.log(rideId)
        this.props.handleRetrieveRequests(rideId)
        this.props.history.push(`/rides/${rideId}/requests`)
    }
    handleClick=rideId=>e=>{
        e.preventDefault();
        console.log('dsfghjkjhgfdsfghjhgfd',rideId)
        this.props.handleRequests(rideId)
    }
    render() { 
        return ( 

            <div claasName='center'>
                <div className={'center'}>
                {this.props.processing &&<Spinner/>}
            </div>
                <div className="card-details center col s12 m7 z-depth-5">
            <div className="ride-details">
                <p className="details-heading">id:</p>
                <p className="detail">#{this.props.rideDetail.id}</p>
            </div>
            <div className="ride-details">
                <p className="details-heading">Origin:</p>
                <p className="detail">{this.props.rideDetail.origin}</p>
            </div>
            <div className="ride-details">
                <p className="details-heading">Destination:</p>
                <p className="detail">{this.props.rideDetail.destination}</p>
            </div>
            <div className="ride-details">
                <p className="details-heading">Date & time:</p>
                <p className="detail">{this.props.rideDetail.date_time}</p>
            </div>
            <div className="ride-details">
                <p className="details-heading">Driver:</p>
                <p className="detail">{this.props.rideDetail.driver}</p>
            </div>
            <div >

                {localStorage.getItem('username') !== this.props.rideDetail.driver?
                <button  className=" btn blue waves-light " onClick={this.handleClick(this.props.rideDetail.id)}>JOIN RIDE
                <i class="material-icons right">send</i></button>:
                <button  className=" btn blue waves-light " onClick={this.manageRequests(this.props.rideDetail.id)}>MANAGE REQUESTS
                <i class="material-icons right" >desktop_mac</i></button>
                }
            </div>
        </div>

            </div>
         );
    }
}

const mapStateToProps = state =>({
    processing: state.rides.processing,
    rideDetail: state.rides.rideDetail
  });
 
export default connect(mapStateToProps, {retrieveRideDetails, handleRetrieveRequests, handleRequests})(RideDetails);
