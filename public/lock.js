/* global Auth0Lock */

// config
const auth0ClientId = '' // Your Auth0 Client ID
const connectionName = '' // Your Auth0 connection name
const auth0Domain = '' // Your Auth0 Domain

const lock = new Auth0Lock(auth0ClientId, auth0Domain)

document.getElementById('btn-login').addEventListener('click', () => {
  lock.showSignin({ connections: ['facebook'], callbackURL: window.location.href + 'callback' })

  // add custom connection
  lock.once('signin ready', function () {
    const link = document.createElement('a')
    link.className = 'a0-zocial a0-custom'
    link.setAttribute('href', '#')

    const text = document.createElement('span')
    text.textContent = 'Custom Login'
    link.appendChild(text)

    link.addEventListener('click', (e) => {
      e.preventDefault()
      lock.getClient().login({
        connection: connectionName,
        responseType: 'code'
      })
    })
    document.querySelector('.a0-iconlist').appendChild(link)
  })
})
