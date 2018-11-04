import React, { Component } from 'react';
import { handleLogin } from '../../redux/actions/AuthActions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import M from 'materialize-css'
import Spinner from '../spinner';


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
            window.location.replace('rides');
            M.toast({html: 'You have logged in successfully', classes: 'green darken-4', });
        }else if (this.props.error && !this.props.processing){
            M.toast({html: `${this.props.error}`, classes: 'red darken-4', });
        }
    }
    render() {
        return (
            <div>
            <div>
                {this.props.processing && <Spinner/>}
            </div> 
            <div className="container z-depth-5 jumbotron  ">
               
                <h3 className="blue-grey-text center subheader">Please Login</h3>

                <div className="row">
                    <form className="col s8 m7 l6 offset-s2 offset-m3 offset-l3" id='loginUser'
                          onSubmit={this.handleSubmit}>

                        <div className="input-field">
                            <i className="material-icons prefix blue-text">account_circle</i>
                            <input className='validate white-text' type="text" value={this.state.username} name="username"
                                   id="username" onChange={this.handleChange} placeholder="Enter Username" required/>
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix blue-text">lock</i>
                            <input className='validate white-text' type="password" value={this.state.password} name="password"
                                   id="password" onChange={this.handleChange} placeholder="Enter Password" required/>
                        </div>

                        <div className="row">
                            <button className="btn  blue right hoverable ">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>            );
                   }
               }

const mapStateToProps= (state)=>{
return {
processing:state.login.loginProcessing,
error:state.login.loginError,
message:state.login.loginMessage
}}

Login.propTypes = {
handleLogin: PropTypes.func.isRequired

};

export default connect(mapStateToProps, { handleLogin })(Login);
