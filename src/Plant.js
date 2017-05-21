import React from 'react'
import PropTypes from 'prop-types'
import './Plant.css'

function formatWeeks(timeInDays) {
  return (timeInDays / 7)
}

class Plant extends React.Component {
  render () {
    const { plant } = this.props
    return (
      <div className='plant'>
        <h1>When to Plant My <span className='thePlantNameHeading'>{plant.name}</span>?</h1>
        <p><strong>Family:</strong> {plant.family} <strong>Max Temp:</strong> {plant.max_high_temp} <strong>Min Temp:</strong> {plant.max_low_temp}</p>
        <p><strong>Other Notes: </strong>Start indoors approx. {formatWeeks(plant.days_before_start_indoors)} weeks before planting outside.</p>
        <p>{plant.description_wiki}</p>

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
        <p>Best days for transplanting are on cloudy overcast days. Light rain is okay. Avoid hot sunny days and heavy rain. If all you have are sunny days, try planting in the evenings or early morning. Always harden off your plants before transplanting them out and water after planting.</p>
      </div>
    )
  }
}

Plant.propTypes = {
  plant: PropTypes.object.isRequired
}

export default Plant
