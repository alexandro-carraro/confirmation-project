import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login/Login.tsx'
import './index.css'
import Confirmation from './Confirmation/Confirmation.tsx'
import Register from './Register/Register.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
    <Confirmation />
    <Register />
  </React.StrictMode>,
)
