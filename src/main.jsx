import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Banner from './components/Banner.jsx'
import './index.css'

//se agregó el banner por encima de App, para que esté pueda tener la función de aparecer sobre app y luego cerrar sin afectar al mismo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
    <App />
  </React.StrictMode>,
)
