import { ReactComponent as Logo } from "../../public/favicon.svg";
import "./Home.scss";
import './Resume.scss'
import SkillBar from '../components/SkillBar/SkillBar'
import Contact from '../components/Contact/Contact'

function Home() {
  const onContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  // HomePictures
  return (
    <div className="Home">
      <section className="home-introduction">
        <div className="container">
          <div className="columns my-0">
            <div className="column is-7 textColumn">
              <div className="mt-5 home-lead">
                FlatCat: Developer and Artist
              </div>
              <h1>
                Hi! My Name is Jenni!
                <br />
                Nice to meet you!
              </h1>
              <button
                className="button is-medium is-primary mr-5"
                onClick={onContact}
              >
                Contact
              </button>
              <a
                href="https://github.com/Flat-Cat/webseite"
                target="_blank"
                className="button is-medium is-link"
              >
                GitHub
              </a>
            </div>

            <div className="column is-2 py-0"></div>
            <div className="column is-3 py-0 picColumn">
              <Logo></Logo>
            </div>
          </div>
        </div>
      </section>
      <section className="home-skills">
        <div className="container">
          <h2>Skills</h2>
          <SkillBar title="HTML & CSS " value={43}></SkillBar>
          <SkillBar title="Javascript & Typescript " value={35}></SkillBar>
          <SkillBar title="React" value={39}></SkillBar>
          <SkillBar title="Java Spring Boot" value={100}></SkillBar>
          <div>Wanna know more what else I can do?</div>
          <button className="button is-medium is-white mr-5">Resume</button>
        </div>
      </section>
      <section className="home-contact">
        <div className="container">
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
}
export default Home;
