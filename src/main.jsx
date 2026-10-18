import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
)
