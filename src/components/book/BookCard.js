import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BookCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./bookpic.jpg')} alt="Book" />
          </picture>
          <h3>Title: <span className="card-petname">{this.props.bookProp.title}</span></h3>
          <p>Author: {this.props.bookProp.author}</p>
          <Link to={`/books/${this.props.bookProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default BookCard;