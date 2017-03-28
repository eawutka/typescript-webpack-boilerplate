import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import AppStore from './AppStore'
import App from './App'


setTimeout(() => {
  AppStore.setTitle('wat')
}, 2000)

ReactDOM.render(  
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
)