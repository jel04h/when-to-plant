import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PlantList from './PlantList'
import Plant from './Plant'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  Switch
} from 'react-router-dom'

class Root extends React.Component {
  constructor () {
    super()
    this.state = {
      // theplants
    }
  }

  render () {
    return (
      <Router history={hashHistory}>
        <App>
          <Switch>
            <Route exact path='/' render={props => (
              <PlantList />
            )} />
            <Route exact path='/plantlist' render={props => (
              <PlantList />
            )} />
            <Route path='/plants/:plant' render={props => (
              <Plant />
            )} />
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
