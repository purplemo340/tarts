import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Tarts from './Tarts.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='title'>Tarts</h1>
    <App />
  </div>
)
