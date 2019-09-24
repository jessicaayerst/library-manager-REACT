import React, { Component } from 'react'
//import the components we will need
import BookCard from './BookCard'
import BookManager from '../../modules/BookManager'

class BookList extends Component {
    //define what this component needs to render
    state = {
        books: [],
    }
deleteBook = id => {
        BookManager.delete(id)
        .then(() => {
          BookManager.getAll()
          .then((newBooks) => {
            this.setState({
                books: newBooks
            })
          })
        })
      }
componentDidMount(){
    console.log("BOOK LIST: ComponentDidMount");
    //getAll from PatronManager and hang on to that data; put it in state
    BookManager.getAll()
    .then((booksFromDataBase) => {
        this.setState({
            books: booksFromDataBase
        })
    })
}

render(){
    console.log("BOOK LIST: Render");

    return(
        <div className="container-cards">
            {this.state.books.map(singleBook =>
            singleBook.available ?
            <BookCard key={singleBook.id} bookProp={singleBook} deleteBook={this.deleteBook}/> : ``)}
        </div>
    )
}
}

export default BookList
