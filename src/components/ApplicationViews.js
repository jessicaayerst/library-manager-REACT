import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import BookList from './book/BookList'
import PatronList from './patron/PatronList'
import BookDetail from './book/BookDetail'
import PatronDetail from './patron/PatronDetail'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/books" render={(props) => {
          return <BookList />
        }} />
        <Route path="/books/:bookId(\d+)" render={(props) => {
          // Pass the bookId to the BookDetailComponent
          return <BookDetail {...props} bookId={parseInt(props.match.params.bookId)} />
        }} />
        <Route exact path="/patrons" render={(props) => {
          return <PatronList />
        }} />
        <Route path="/patrons/:patronId(\d+)" render={(props) => {
          // Pass the patronId to the PatronDetailComponent
          return <PatronDetail {...props} patronId={parseInt(props.match.params.patronId)} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews