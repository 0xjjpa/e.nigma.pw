import React, { Component } from 'react'
import { load } from './Encrypt'
import { signedMessage } from './Fixtures'

class App extends Component {
  async componentWillMount () {
    const isLegit = await load('jjperezaguinaga', signedMessage)
    console.log('Are we legit?', isLegit)
  }
  render () {
    return (
      <div className='App' />
    )
  }
}

export default App
