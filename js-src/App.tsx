import * as React from 'react'
import {observer, inject} from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import AppStore from './AppStore'

@observer
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>{AppStore.title}</h1>
        <DevTools />
      </div>
    )
  }
}