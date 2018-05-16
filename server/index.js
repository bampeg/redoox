require('dotenv').config()

const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')

const {
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL
} = process.env

const app = express()

app.use(express.static(`${__dirname}/../build`))
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CALLBACK_URL,
  scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  done(null, profile)
}))

passport.serializeUser((profile, done) => {
  done(null, profile)
})

passport.deserializeUser((profile, done) => {
  done(null, profile)
})

app.get('/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000',
  failureRedirect: 'http://localhost:3000'
}))

app.listen(SERVER_PORT, () => console.log(`Aint it perdy on port ${SERVER_PORT}?`))