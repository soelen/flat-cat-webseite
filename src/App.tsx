import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bulma/css/bulma.min.css'

function App() {
  const [count, setCount] = useState(0)

// Return => Funk. Reaktiven HTML Code generieren der asynchron auf Events reagiert
  return (
    <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      Card header
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
</div>
  )
}

export default App
