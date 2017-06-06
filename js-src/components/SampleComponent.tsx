import * as React from 'react'
import { observer } from 'mobx-react'

@observer
export default class SampleComponent extends React.Component
<{
  requiredProp: string
  optionalProp?: boolean
}, {
  requiredStateValue: string
  optionalStateValue?: boolean
}> {
  constructor() {
    super()

    this.state = {
      requiredStateValue: 'foo'
    }
  }
  render() {
    return (
      <div className='SampleComponent'>
        <h1>{this.state.requiredStateValue}</h1>
      </div>
    )
  }
}