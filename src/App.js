import React, { Component } from 'react'
import Api from './Api'
import { PUBLIC_KEY_NOT_FOUND_ERROR } from './Errors'
import verify from 'keybase-verify'

class App extends Component {
  componentDidUpdate () {
    this.verify()
  }
  componentWillMount () {
    this.verify()
  }
  async verify () {
    try {
      const { user, message } = this.props.location.query
      const publicKey = await Api.getPublicKey(user)
      if (publicKey === PUBLIC_KEY_NOT_FOUND_ERROR) {
        throw new Error('User doesn’t exist.')
      }
      const isLegit = await verify(publicKey, message)
      console.log('We legit', isLegit)
    } catch (err) {
      console.log('Err', err)
    }
  }
  render () {
    return (
      <div className='App' />
    )
  }
}

export default App
