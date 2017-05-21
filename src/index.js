import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  Switch
} from 'react-router-dom'

// import plants from './database/plants'

import App from './App'
import PlantList from './PlantList'
import Plant from './Plant'
import base from './base'
import NotFound from './NotFound'

class Root extends React.Component {
  constructor () {
    super()
    this.state = {
      plants: {}
    }
    this.loadPlants = this.loadPlants.bind(this)
  }

  componentWillMount () {
  // Runs on init right before the application is rendered
  // can set the state in here without re-rendering
    this.baseRef = base.syncState('/', {
      context: this,
      state: 'plants'
    })
  }

  componentWillUnmount () {
    // clean up the mess you made
    base.removeBinding(this.baseRef)
  }

  componentWillUpdate (nextProps, nextState) {
  // Runs on a state update, handle side effects here. Do not mess with state here. READ ONLY (from state)
  }

  loadPlants () {
    // this.setState({
    //   plants
    // })
  }

  render () {
    return (
      <Router history={hashHistory}>
        <App>
          <Switch>
            <Route exact path='/' render={props => (
              <PlantList plants={this.state.plants} loadPlants={this.loadPlants} />
            )} />
            <Route exact path='/plants' render={props => (
              <PlantList plants={this.state.plants} loadPlants={this.loadPlants} />
            )} />
            <Route path='/plants/:plant' render={props => {
              const plantName = props.match.params.plant
              const plants = Object.keys(this.state.plants)
              .map(key => this.state.plants[key])
              const plant = plants.find(p => p.name === plantName)
              if (plant) {
                return (
                  <Plant plant={plant} />
                )
              } else {
                return (
                  <Route path='*' status={404} component={NotFound} />
                )
              }
            }} />
          </Switch>
        </App>
      </Router>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
