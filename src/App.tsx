import './App.css'
import SkillBar from './components/SkillBar/SkillBar'
import Header from './components/Header'

function App() {

// Skillbars
  return (
    <div>
      <Header title="Affe"></Header>
      <h1 className="SkillBar"> My Skills </h1>
      <SkillBar title="HTML & CSS " value={31}></SkillBar>
      <SkillBar title="Javascript & Typescript " value={35}></SkillBar>
      <SkillBar title="React" value={18}></SkillBar>
      <SkillBar title="Java Spring Boot" value={12}></SkillBar>
    </div>
  )
}
// Return => Funktion. Generiere reaktiven HTML Code, der synchron auf Events reagiert.

export default App
