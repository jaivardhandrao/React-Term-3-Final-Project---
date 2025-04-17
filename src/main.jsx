import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyCartProvider } from './Contexts/MyCartContext.jsx';

createRoot(document.getElementById('root')).render(
  <MyCartProvider>
    <App />
  </MyCartProvider>
)
