import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import './index.css'
import Bible from './Bible.tsx'
import Confirmation from './Confirmation.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
    <Bible />
    <Confirmation />
  </React.StrictMode>,
)
