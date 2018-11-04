import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleLogout=()=>{
        if (localStorage.getItem('token')){
            localStorage.clear()
            this.props.history.push('/login')
        }


    }
    render() { 
        return (
        <div>
        <nav>
            <div class="nav-wrapper grey darken-4 responsive">
            <h4 className="brand-logo row">Ride my way</h4>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink  to='/'>Home</NavLink ></li>
                {localStorage.getItem('token') && <li><NavLink  to='/rides'>Rides</NavLink ></li>}
                {! localStorage.getItem('token') && <li><NavLink  to='/register'>Register</NavLink ></li>}
                { localStorage.getItem('token') && <li><NavLink  to='/createRide'>Offer a ride</NavLink ></li>}
                {! localStorage.getItem('token') && <li><NavLink  to='/login'>Login</NavLink ></li>}
                {localStorage.getItem('token') && <li id='logout'><NavLink  to='/login' onClick={this.handleLogout}>Logout</NavLink ></li>}
                
            </ul>
            </div>
        </nav>
            <br/><br/>
            <div className='center'>
            {localStorage.getItem('username') && <CreateRideButton/>}
            </div>
            <br/>
        </div>
         );
    }
}

const  CreateRideButton= () => {
    return (
        <div className="button-center">
        <NavLink className="waves-effect waves-teal center btn-flat green" to='/createRide'>OFFER A RIDE</NavLink >
        </div>
     );
}

export default NavBar;
