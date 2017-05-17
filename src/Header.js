import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = (props) => {
  return (
    <header>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'>What to Plant</a>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li className='active'><a href='#'>Plant Lists<span className='sr-only'>(current)</span></a></li>
              <li><a href='#'>Current Calendar Weather</a></li>
              <li><a href='#'>Tomato</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
