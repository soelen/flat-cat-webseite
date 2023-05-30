import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
// Main => Startpunkt meiner App. 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Main = Entry Point