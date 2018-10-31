import React from 'react'
import { registerUser} from '../../redux/actions/AuthActions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import M from 'materialize-css'



class RegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {name:'',
            username:'',
            password:'',
            confirmPassword:''
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e){
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value });
    }
    handleSubmit = async(e)=>{
        e.preventDefault();

        const userData = {
                        name: this.state.name,
                        username: this.state.username,
                        password: this.state.password,
                        };
    if (this.state.password===this.state.confirmPassword){

        await this.props.registerUser(userData);
        console.log('>>>>>>>>>>>>>>>>>>>>>>>',this.props)
        if (this.props.message){
            this.props.history.push('/login')
             M.toast({html: 'You have successfully registered, please login ', classes: 'toast ', });
            }else if(this.props.fail && !this.props.processing){
                M.toast({html: `${this.props.fail}`, classes: 'toast-danger ', });
            }
    }else{
        M.toast({html: 'Your passwords do not match', classes: 'toast-danger ', });
    }
    
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
                        <p>Confirm Password</p>
                        <input type="password" value ={this.state.confirmPassword} name="confirmPassword" id="confirmpassword" onChange = {this.handleChange} placeholder="confirm your Password" required />
                        <input type="submit" />

                    </form>

                </div>);
    }
}
const mapStateToProps= (state)=>{
    return {
    processing:state.auth.processing,
    fail:state.auth.error,
    message:state.auth.message
}}

RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { registerUser })(RegisterForm);
