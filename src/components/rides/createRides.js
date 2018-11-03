import React, { Component } from 'react';
import M from 'materialize-css'
import { CreateRides } from "../../redux/actions/rideActions";
import { connect } from "react-redux";

import Spinner from '../spinner';

class CreateRide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin:'',
            destination:'',
            date:''
        }
    }
    handleChange =(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = async(e)=>{
        e.preventDefault();
        await this.props.CreateRides(this.state)
        if (!this.props.processing && this.props.message==="You offered a ride successfully."){
            this.props.history.push('/rides')
            M.toast({html: `${this.props.message}`, classes: 'green darken-4', });
        } else if (!this.props.processing &&this.props.CreateError){
            M.toast({html: `ERROR:${this.props.CreateError}`, classes: 'red darken-4', });
        }

    }
    render() {
        return (
            
            <div className="container z-depth-5 jumbotron ">
                <h3 className="blue-grey-text center subheader">Offer A Ride</h3>
                <div className={'center'}>
                    {this.props.processing &&<Spinner/>}
                </div>

                <div className="row">
                    <form className="col s8 m7 l6 offset-s2 offset-m3 offset-l3" id="addRide"
                          onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix blue-text">directions_car</i>
                            <input className ='blue-text' type="text" name="origin" value={this.props.origin}  onChange = {this.handleChange}
                                   id ="origin" placeholder="Enter ride origin" required />
                        </div>

                        <div className="input-field" >
                            <i className="material-icons prefix blue-text">navigation</i>
                            <input className ='blue-text' type="text" name="destination" value={this.props.destination}
                                   onChange={this.handleChange} id = "destination" placeholder="Enter the destination" required />

                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix blue-text">date_range</i>
                            <input className ='blue-text' type="text" name="date" id ="date" value = {this.props.date}
                                 onChange={this.handleChange}  placeholder = "fomart YYYY-MM-DD HH:MM:SS" required />

                        </div>

                        <div className="row">
                            <button className="btn blue right">Submit</button>
                        </div>
                    </form>
                </div>
            </div>


         );
    }
}
const mapStateToProps = state =>{
   return  {
    CreateError: state.rides.CreateRideError,
    message: state.rides.CreateMessage,
    processing: state.rides.CreateRideProcessing,
    
  }};

export default connect(mapStateToProps, {CreateRides})(CreateRide);
