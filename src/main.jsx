import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './portfolio.jsx'
import './style.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeedInsights/>
    <Portfolio />
  </React.StrictMode>,
)