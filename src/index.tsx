import React from 'react'
import ReactDOM from 'react-dom'
import '@css/global.css'
import * as Sentry from '@sentry/react'
import App from './App'
import * as serviceWorker from './serviceWorker'

Sentry.init({
  dsn: 'https://1f420ec150ec4548b3d6e8410a60f421@o86124.ingest.sentry.io/5389408',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
