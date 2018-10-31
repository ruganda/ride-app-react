import React, { Component } from 'react';
import { handleLogin } from '../../redux/actions/AuthActions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import M from 'materialize-css'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = async(e)=>{
        e.preventDefault();
        await this.props.handleLogin(this.state)
        if(this.props.message && !this.props.processing){
            this.props.history.push('/rides')
            M.toast({html: 'You have logged in successfully', classes: 'toast ', });
        }else if (this.props.error && !this.props.processing){
            M.toast({html: `${this.props.error}`, classes: 'toast-danger ', });
        }
    }
    render() {
        return (
            <div class="form-box">
                <h1> Login Here</h1>
                <form id='loginUser' onSubmit={this.handleSubmit}>
                    <p>Username</p>
                    <input type="text" name="username" value= {this.state.username} onChange={this.handleChange} placeholder="Enter Username" id='username' required />
                    <p>Password</p>
                    <input type="password" name="password" value={this.state.password} onChange = {this.handleChange}
                     placeholder="Enter Password" id='password' required />
                    <input type="submit" name="submit"  />

                 </form>
            </div>
                        );
                   }
               }
                
const mapStateToProps= (state)=>{
return {
processing:state.login.processing,
error:state.login.loginError,
message:state.login.loginMessage
}}

Login.propTypes = {
handleLogin: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { handleLogin })(Login);