import React, { Component } from 'react'
import { verify } from './Encrypt'
import { signedMessage } from './Fixtures'

class App extends Component {
  async componentWillMount () {
    const isLegit = await verify('jjperezaguinaga', signedMessage)
    console.log('Are we legit?', isLegit)
  }
  render () {
    return (
      <div className='App' />
    )
  }
}

export default App
