import React, { Component } from 'react';
import { Link } from "react-router-dom";
class PatronCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./person.jpg')} alt="Person" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.patronProp.name}</span></h3>
          <Link to={`/patrons/${this.props.patronProp.id}`}><button>Details</button></Link>

        </div>
      </div>
    );
  }
}

export default PatronCard;