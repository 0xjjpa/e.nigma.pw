class Api {
  async getPublicKey (user) {
    try {
      return await window.fetch(`https://keybase.io/${user}/key.asc`)
        .then((res) => res.text())
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export default new Api()
