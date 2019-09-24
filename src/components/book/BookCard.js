import React, { Component } from 'react';

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
          <button type="button" onClick={() => this.props.deleteBook(this.props.bookProp.id)}>Mark Unavailable</button>
        </div>
      </div>
    );
  }
}

export default BookCard;