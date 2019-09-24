import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';


class BookDetail extends Component {

  state = {
      title: "",
      author: "",
      ISBN: "",
      coverPhoto: "",
      loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    BookManager.delete(this.props.bookId)
    .then(() => this.props.history.push("/books"))
}
  componentDidMount(){
    console.log("BookDetail: ComponentDidMount");
    //get(id) from BookManager and hang on to the data; put it into state
    BookManager.get(this.props.bookId)
    .then((book) => {
      this.setState({
        title: book.title,
        author: book.author,
        ISBN: book.ISBN,
        coverPhoto: book.coverPhoto,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
         <picture>
            <img src={this.state.coverPhoto} alt="Book" />
            </picture>
            <h3>Title: <span style={{ color: 'darkslategrey' }}>{this.state.title}</span></h3>
            <p>Author: {this.state.author}</p>
            <p>ISBN: {this.state.ISBN}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Mark Unavailable</button>
        </div>
      </div>
    );
  }
}

export default BookDetail;