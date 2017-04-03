import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {HashRouter as Router, Route} from 'react-router-dom'

import AppStore from './AppStore'
import App from './App'

ReactDOM.render(  
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
)