import React from 'react'
import { Link } from 'react-router-dom'

import './PlantList.css'

const PlantList = (props) => {
  return (
    <div className='plant-list'>
      <h1>Plant List</h1>
      <p>The list of plants</p>
      <ul className='plantul'>
        <a href='#'><li>Tomato</li></a>
        <a href='#'><li>Peppers</li></a>
        <a href='#'><li>Radish</li></a>
        <a href='#'><li>Green Onions</li></a>
        <a href='#'><li>Basil</li></a>
        <a href='#'><li>Oregano</li></a>
        <a href='#'><li>Peppermint</li></a>
      </ul>
    </div>
  )
}

export default PlantList
