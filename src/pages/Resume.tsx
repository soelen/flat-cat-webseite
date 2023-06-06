import './Resume.scss'
import SkillBar from '../components/SkillBar/SkillBar'

function Resume() {

  // Skillbars
  return (
    <div className="container">

<figure className="displayResumee">
        <embed id="resumee" src="/Resumee/resumee.pdf" type="application/pdf" width="100%" height="600px"  title="resumeeTitle"/>
</figure>

<h1 className="title has-text-black">My Skills</h1>

      <SkillBar title="HTML & CSS " value={43}></SkillBar>
      <SkillBar title="Javascript & Typescript " value={35}></SkillBar>
      <SkillBar title="React" value={39}></SkillBar>
      <SkillBar title="Java Spring Boot" value={100}><div>Hi</div></SkillBar>
      {/* Childern sind eig. Slots.  */}
    </div>
  )
}
// Return => Funktion. Generiere reaktiven HTML Code, der synchron auf Events reagiert.

export default Resume
