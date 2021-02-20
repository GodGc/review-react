import React, {Component} from 'react'
import {Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/index'
import './index.scss'

export default class App extends Component {
  render () {
    return <div>
      <Switch>
        <Route path='/' component={Index}/>
      </Switch>
    </div>
  }
}