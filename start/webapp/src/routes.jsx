/* eslint-disable */
import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import NavigationWrapper from './components/Navigation'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import 'styles/index.scss'

const Routes = () => (
  <Router>
    <NavigationWrapper>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/dash" component={Dashboard} />
      </div>
    </NavigationWrapper>
  </Router>
)

export default Routes
