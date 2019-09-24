import React, { Component } from 'react';

class PatronCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./person.jpg')} alt="Person" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.patronProp.name}</span></h3>
          <p>Address: {this.props.patronProp.address}</p>
          <button type="button" onClick={() => this.props.deletePatron(this.props.patronProp.id)}>Mark Inactive</button>
        </div>
      </div>
    );
  }
}

export default PatronCard;