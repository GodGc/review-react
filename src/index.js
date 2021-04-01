import React from 'react'
import { HashRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import App from './App.jsx'
import mReact from './pages/mReact/ownRender'


const element = (
    <div className="border">
        I'm a div
        <h1>h1 part</h1>
        <p>p part</p>
    </div>
)


ReactDom.render(<HashRouter>
    <App></App>
  </HashRouter>,
  document.getElementById('root')
)

// mReact.render(element, document.getElementById('root'))