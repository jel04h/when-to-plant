import React from 'react'
import { Link } from 'react-router-dom'

import './Plant.css'

const Plant = (props) => {
  return (
    <div className='plant'>
      <h1>When Can I Plant My <span className='thePlantNameHeading'>Tomato</span> Starts?</h1>
      <p>Tomatos are heat loving plants and sensitive to cold. Optimum temperature range for growth: 70-80. Temperature range for survival: 50-100.</p>

      <div className='row strap-calendar'>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <div className='xx' />
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'><img className='img-responsive weather-icon' src='/images/005-cloudy-3.svg' /></h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <div className='check' />
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'><img className='img-responsive weather-icon' src='/images/005-cloudy-3.svg' /></h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'>ICON</h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'>ICON</h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'>ICON</h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center week-name'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'>ICON</h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center week-name'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'><img className='img-responsive weather-icon' src='/images/005-cloudy-3.svg' /></h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'>ICON</h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
          <div className='well weatherbox'>
            <h2 className='text-center'>Tues</h2>
            <p className='small text-center'>May 15</p>
            <h1 className='text-center'>ICON</h1>
            <h2 className='text-center'>53°/46°</h2>
          </div>
        </div>
      </div>
      <p>Best days for transplanting are on cloudy overcast days. Light rain is okay. Avoid hot sunny days and heavy rain. If all you have are sunny days, try planting in the evenings or early morning. Always harden off your plants before transplanting them out and water after planting. </p>


    </div>
  )
}

export default Plant
