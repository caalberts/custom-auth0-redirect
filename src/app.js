import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()

const auth0TokenUri = '' // Your auth0 token URL
const redirectUri = '' // Your application redirect URL

app.use(express.static('public'))
app.use(cors())

// auth0 callback
app.get('/callback', (req, res) => {
  // exchange auth0 code for auth0 token
  fetch(auth0TokenUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'client_id=' + process.env.CUSTOMAUTH_AUTH0_CLIENTID +
    '&redirect_uri=' + redirectUri +
    '&code=' + req.query.code +
    '&client_secret=' + process.env.CUSTOMAUTH_AUTH0_SECRET +
    '&grant_type=authorization_code'
  }).then(response => response.json())
    .then(data => {
      console.log('access token is', data.access_token)
      console.log('id token is', data.id_token)
      res.send(data)
    })
})

export default app
