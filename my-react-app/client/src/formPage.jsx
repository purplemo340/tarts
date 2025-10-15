import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Tarts from './Tarts.jsx'
import App from '../../client/src/App.jsx'
import './index.css'
import { loadStripe } from '@stripe/stripe-js'
import App1 from './Cart.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='title'>Tarts</h1>
    <App1/>
    
  </div>
)
