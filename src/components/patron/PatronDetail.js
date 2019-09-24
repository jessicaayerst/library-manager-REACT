import React, { Component } from 'react';
import PatronManager from '../../modules/PatronManager';


class PatronDetail extends Component {

  state = {
      name: "",
      address: "",
      email: "",
      phone: "",
      loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in PatronManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    PatronManager.delete(this.props.patronId)
    .then(() => this.props.history.push("/patrons"))
}
  componentDidMount(){
    console.log("PatronDetail: ComponentDidMount");
    //get(id) from PatronManager and hang on to the data; put it into state
    PatronManager.get(this.props.patronId)
    .then((patron) => {
      this.setState({
        name: patron.name,
        address: patron.address,
        email: patron.email,
        phone: patron.phone,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <p>E-mail: {this.state.email}</p>
            <p>Phone Number: {this.state.phone}</p>

            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Mark Inactive</button>
        </div>
      </div>
    );
  }
}

export default PatronDetail;