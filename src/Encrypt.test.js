import { verify } from './Encrypt'
import * as Fixture from './Fixtures'

it('returns legit when the message and the supposed signer match',  async () => {
  const response = await verify(Fixture.publicKey, Fixture.signedMessage)
  expect(response.legit).toBe(true)
})

it('returns false and an error when the message and the supposed signer don’t match',  async () => {
  try {
    const response = await verify(Fixture.publicKey, Fixture.foreignMessage)
  } catch (err) {
    expect(err.legit).toBe(false)
    expect(err.err).toBeTruthy()
  }
})

it('returns false and an error when the message has been modified and not resigned', async () => {
  try {
    const response = await verify(Fixture.publicKey, Fixture.tamperedMessage)
  } catch (err) {
    expect(err.legit).toBe(false)
    expect(err.err).toBeTruthy()  
  }
})
