import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleLogout=()=>{
        if (localStorage.getItem('token')){
            localStorage.removeItem('token')
            this.props.history.push('/login')
        }


    }
    render() { console.log('........', localStorage.getItem('token'))
        return (

        <nav>
            <div class="nav-wrapper grey darken-4">
            <h4 className="brand-logo row">Ride my way</h4>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink  to='/'>Home</NavLink ></li>
                {localStorage.getItem('token') && <li><NavLink  to='/rides'>Rides</NavLink ></li>}
                {! localStorage.getItem('token') && <li><NavLink  to='/register'>Register</NavLink ></li>}
                { localStorage.getItem('token') && <li><NavLink  to='/createRide'>Offer a ride</NavLink ></li>}
                {! localStorage.getItem('token') && <li><NavLink  to='/login'>Login</NavLink ></li>}
                {localStorage.getItem('token') && <li><NavLink  to='/login' onClick={this.handleLogout}>Logout</NavLink ></li>}
            </ul>
            </div>
        </nav>
         );
    }
}

const  CreateRideButton= () => {
    return (
        <div className="button-center">
          <a href="offer_ride.html">
            <button class="btnz btn-primary">OFFER A RIDE</button>
          </a>
        </div>
     );
}

const mapStateToProps = state =>({
    isLoggedIn:state.login.isLoggedIn
});

export default connect(mapStateToProps, {})(NavBar);
