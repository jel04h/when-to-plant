import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PlantList.css'

class PlantList extends React.Component {
  render () {
    const { plants } = this.props
    return (
      <div className='plant-list'>
        <h1>Plant List</h1>
        <p>The list of plants</p>
        <ul className='plantul'>
          {Object.keys(plants).map(key => {
            const plant = plants[key]
            return <li key={key}>
              <Link to={`plants/${plant.name}`}>{plant.name}</Link>
              <p className='xsmall'>{plant.family}</p>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

PlantList.propTypes = {
  plants: PropTypes.object.isRequired
}

export default PlantList
