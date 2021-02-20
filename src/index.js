import React, {Component} from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import App from './App.jsx'

ReactDom.render(<HashRouter>
    <App></App>
  </HashRouter>,
  document.getElementById('root')
)