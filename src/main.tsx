import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize'
import '@/styles/global.css'
import * as Sentry from '@sentry/react'
import App from './App'
import '@/services/i18n'

Sentry.init({
  dsn: 'https://1f420ec150ec4548b3d6e8410a60f421@o86124.ingest.sentry.io/5389408',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
