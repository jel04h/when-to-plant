import React, { Component } from 'react'
// import logo from './logo.svg'
import Header from './Header'
import Footer from './Footer'
import { Navbar, Jumbotron, Button } from 'react-bootstrap'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='bodyWrapper'>
          <Header />
          <div className='main'>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
