import "./Home.scss";
import './Resume.scss'
import SkillBar from '../components/SkillBar/SkillBar'
import Contact from '../components/Contact/Contact'

function Home() {

  return (
    <div className="Home">
      <section className="introduction py-6">
        <div className="container">
          <div className="columns my-0">
            <div className="column is-7 textColumn">
              <div className="mt-5">Me is: Developer and Artist</div>
              <h1>Hi! Nice to see you here!</h1>
              <h1>Example</h1>
              <button className="button buttonMySkills is-medium is-primary mr-5">My skills</button>
              <button className="button buttonGithub is-medium is-link">Github</button>
            </div>

            <div className="column is-3 py-0 picColumn">
              <img className="is-block" id="homeimage01" src="/img/home/homepic.png" title="title01" />
            </div>
          </div>
        </div>
      </section>

      {/*___Skillbars___*/}
      <section>
        <div className="container py-6">

          <div className="column textColumn ">
            <h1 className="title has-text-black">My Skills</h1>

            <SkillBar title="HTML & CSS " value={43}></SkillBar>
            <SkillBar title="Bulma " value={46}></SkillBar>
            <SkillBar title="Javascript & Typescript " value={35}></SkillBar>
            <SkillBar title="React" value={41}></SkillBar>
            <SkillBar title="Java Spring Boot" value={29}></SkillBar>

          </div>
        </div>
      </section>

      {/*___Contact_Fomular___*/}
      <section className="contactForm py-6">
        <div className="container">
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
}
export default Home;
