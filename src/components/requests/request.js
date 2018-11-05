
import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from '../spinner';
import { handleRequestUpdate, handleRetrieveRequests } from '../../redux/actions/requestAction';
class Requests extends Component {


  componentDidMount = ()=> {
    this.props.handleRetrieveRequests(this.props.match.params.Id);
  }
  render() {
    const requestItems = !Array.isArray(this.props.requests)?[]: this.props.requests.map(request=>(
    <tr key ={request.id}>
        <td>{request.passenger}</td>
        <td>{this.props.status?this.props.status:request.status}</td>
        <td>< RequestButton 
        handleAccept ={()=>{this.props.handleRequestUpdate({status:'accepted'},request.ride_id,request.id)}}
        handleReject ={()=>{this.props.handleRequestUpdate({status:'rejected'},request.ride_id,request.id)}}/>
        </td>
    </tr>

    ));
  
    return (

      <div>
      <div className={'center container'}>
          {this.props.processing &&<Spinner/>}
          {this.props.requests.length===0?<h4 className='white'>You currently have no ride requests try again later.</h4>:
          <table className='white'>
    <thead>
      <tr >
          <th>passenger</th>
          <th>status</th>
          <th></th>
      </tr>
    </thead>

    <tbody>
    {requestItems}
    </tbody>
  </table>}
      </div>
        

      </div>
    );
  }
};

export const RequestButton = (props) => {
  return ( 
    <div>
    <button className="btn green waves-light "  type="submit" name="action" onClick ={props.handleAccept} >ACCEPT
    <i class="material-icons right ">check_circle</i>
    </button>
    
    <button className="btn red waves-light update-button"  type="submit" name="action" onClick = {props.handleReject}>REJECT
    <i class="material-icons right">clear</i>
    </button>
    </div>
   );
}
 

const mapStateToProps = state =>{
    return{
  requests: state.requests.requestList,
  processing: state.requests.processing,
  status: state.requests.status
}};

export default connect(mapStateToProps, {  handleRetrieveRequests , handleRequestUpdate })(Requests);
