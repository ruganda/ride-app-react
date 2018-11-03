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
             M.toast({html: 'You have successfully registered, please login ', classes: 'green darken-4', });
            }else if(this.props.fail && !this.props.processing){
                M.toast({html: `${this.props.fail}`, classes: 'red darken-4', });
            }
    }else{
        M.toast({html: 'Your passwords do not match', classes: 'red darken-4', });
    }

    }


    render() {

        return (

            <div className="container z-depth-5 jumbotron ">
                <h3 className="blue-grey-text center subheader">Register an account</h3>

                <div className="row">
                    <form className="col s8 m7 l6 offset-s2 offset-m3 offset-l3" id="registerUser" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix blue-text">Name</i>
                            <input className='validate white-text' type="text" value ={this.state.name} name="name" onChange = {this.handleChange} id="name" placeholder="Enter Name" required />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix blue-text">account_circle</i>
                            <input className='validate white-text' type="text" value ={this.state.username} name="username" id="username" onChange = {this.handleChange} placeholder="Enter Username" required />
                        </div>


                        <div className="input-field">
                            <i className="material-icons prefix blue-text">lock</i>
                            <input className='validate white-text' type="password" value ={this.state.password} name="password" id="password" onChange = {this.handleChange} placeholder="Enter Password" required />
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix blue-text ">lock</i>
                            <input className='validate white-text' type="password" value ={this.state.confirmPassword} name="confirmPassword" id="confirmpassword" onChange = {this.handleChange} placeholder="confirm your Password" required />
                        </div>

                        <div className="row">
                            <button class="btn waves-effect waves-light right"> sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
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
