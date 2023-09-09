import React from 'react'
import ReactDOM from 'react-dom/client'

import { ContextProvider } from './Context.jsx'
import App from './App.jsx'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>,
)
