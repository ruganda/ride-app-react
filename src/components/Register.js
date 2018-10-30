import React from 'react'
import '../style.css'
import {registerUser} from '../redux/actions/AuthActions'
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class RegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {name:'',
            username:'',
            password:'',
            message: ''
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e){

        this.setState({[e.target.name]: e.target.value });
    }
    handleSubmit (e){
        e.preventDefault();
        const userData = {
                        name: this.state.name,
                        username: this.state.username,
                        password: this.state.password
                        };

    this.props.registerUser(userData);
    }

    render() {

        return ( <div className="form-box">
                   <h1>{this.props.message}</h1>
                    <h1>{this.props.error}</h1>
                    <h1>Register Here</h1>
                    <form id="registerUser" onSubmit={this.handleSubmit}>
                        <p>Name</p>
                        <input type="text" value ={this.state.name} name="name" onChange = {this.handleChange} id="name" placeholder="Enter Name" required />
                        <p>Username</p>
                        <input type="text" value ={this.state.username} name="username" id="username" onChange = {this.handleChange} placeholder="Enter Username" required />
                        <p>Password</p>
                        <input type="password" value ={this.state.password} name="password" id="password" onChange = {this.handleChange} placeholder="Enter Password" required />
                        <input type="submit" />

                    </form>

                </div>);
    }
}
const mapStateToProps= (state)=>{
    console.log(state);
    return {
    processing:state.auth.processing,
    error:state.auth.error,
    message:state.auth.message
}}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { registerUser })(RegisterForm);
