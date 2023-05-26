import { useState } from 'react'
import './App.css'
//import 'bulma/css/bulma.min.css'
import SkillBars from './components/SkillBars'
import Header from './components/Header'

function App() {
  const [] = useState(0)

// Return => Funk. Reaktiven HTML Code generieren der asynchron auf Events reagiert
  return (
 <div><Header title="Affe"></Header><SkillBars></SkillBars></div>
)}

export default App
