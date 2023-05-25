import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
// Index.html =>     <div id="root"></div>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Main = Entry Point