
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import { useEffect } from 'react'


  

createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <App />
    

  </div>
)
