
import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from '../spinner';

class Requests extends Component {


//   componentDidMount = ()=> {
//     this.props.handleRetrieveRequests(this.props.ride);
//   }
  render() {
    const requestItems = this.props.requests.map(request=>(

    <tr key ={request.id} className = "col 6 center">
        <td>{request.passenger}</td>
        <td>{request.status}</td>
        <td>< RequestButton /></td>
    </tr>

    ));
    return (

      <div>
      <div className={'center'}>
          {this.props.processing &&<Spinner/>}
      </div>
        <table className='white'>
    <thead>
      <tr >
          <th>passenger</th>
          <th>status</th>
          <th></th>
      </tr>
    </thead>

    <tbody>
    {this.props.requests.length===0 && <h3 className='white'>You currently have no ride requests try again later.</h3>}
    {requestItems}
    </tbody>
  </table>

      </div>
    );
  }
};

export const RequestButton = (props) => {
  return ( 
    <div>
    <button className="btn green waves-light "  type="submit" name="action">ACCEPT
    <i class="material-icons right ">check_circle</i>
    </button>
    
    <button className="btn red waves-light"  type="submit" name="action">REJECT
    <i class="material-icons center">clear</i>
    </button>
    </div>
   );
}
 

const mapStateToProps = state =>{
    return{
  requests: state.requests.requestList,
  processing: state.requests.processing
}};

export default connect(mapStateToProps, { })(Requests);
