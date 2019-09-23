import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Library from './components/Library.js'

ReactDOM.render(
  <Router>
    <Library />
  </Router>
  , document.getElementById('root'))
