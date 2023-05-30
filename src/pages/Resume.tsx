import './Resume.scss'
import SkillBar from '../components/SkillBar/SkillBar'

function Resume() {

// Skillbars
  return (
    
<div>

<h1 className="SkillBar">My Skills</h1>
<SkillBar title="HTML & CSS " value={43}></SkillBar>
<SkillBar title="Javascript & Typescript " value={35}></SkillBar>
<SkillBar title="React" value={100}></SkillBar>
<SkillBar title="Java Spring Boot" value={100}></SkillBar>
</div>


  )
}
// Return => Funktion. Generiere reaktiven HTML Code, der synchron auf Events reagiert.

export default Resume
