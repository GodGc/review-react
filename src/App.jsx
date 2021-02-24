import React, {Component} from 'react'
import {Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/index'
import Order from './pages/order'
import EventHandle from './pages/eventHandle'
import './index.scss'

export default class App extends Component {
  render () {
    return <div>
      <Switch>
        <Route path='/event' component={EventHandle}/>
        <Route path='/order' component={Order}/>
        <Route path='/' component={Index}/>
      </Switch>
    </div>
  }
}