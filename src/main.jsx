import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './portfolio.jsx'
import './style.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/next"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights/>
    <Portfolio />
  </React.StrictMode>,
)