import * as React from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import AppStore from './AppStore'
import { SampleComponent } from './components'

@observer
export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>{AppStore.title}</h1>
        <SampleComponent requiredProp='foo' />
        <DevTools />
      </div>
    )
  }
}