import "./Resume.scss";
import SkillBar from "../components/SkillBar/SkillBar";

function Resume() {
  // Skillbars
  return (
    <div className="resume">
      <section className="py-6">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <h2 className="title pb-5">Trainings</h2>
            </div>
            <div className="column is-9 is-flex is-justify-content-right">
              <img src="jenni-benni.jpg" width="96"></img>
            </div>
          </div>

          <div className="columns my-0">
            <div className="column is-3">
              <h3 className="subtitle is-4">2020 - 2023</h3>
            </div>
            <div className="column is-9">
              Umschulung zum Fachinformatikerin in Anwendungsentwicklung
              <p className="has-text-grey">Comcave, Ludwigshafen</p>
            </div>
          </div>

          <div className="columns my-0">
            <div className="column is-7 textColumn">
              <div className="columns">
                <div className="column is-one-third">
                  {/* _Trainings_________________________________________________*/}
                  <h4 className="subtitle is-4">2020-2023</h4>
                  <h4 className="subtitle is-4 mb-6 pb-6 yb-6">2009-2013</h4>

                  <section>
                    {/* _Berufliche stationen_________________________________________________*/}
                    <h4 className="title is-4 pb-5 pt-6">
                      Vocational stations
                    </h4>
                    <h4 className="subtitle is-4">2023-2023</h4>
                    <h4 className="subtitle is-4">2022-2022</h4>
                    <h4 className="subtitle is-4">2019-2020</h4>
                    <h4 className="subtitle is-4">2018-2018</h4>
                    <h4 className="subtitle is-4">2013-2018</h4>
                  </section>
                </div>
                <div className="column">
                  <h5 className="subtitle is-5"></h5>

                  <h5 className="subtitle is-5 mt-2">
                    Staatliche Anerkennung zur Kinderpflegerin Erwerb der
                    Mittleren Reife
                  </h5>
                  <p className="mt-1">Zinzendorfschule Königsfeld</p>

                  {/* _________________hier muss space rein?_________________________________*/}
                  <h5 className="subtitle is-5 mt-2">
                    Staatliche Anerkennung zur Kinderpflegerin Erwerb der
                    Mittleren Reife
                  </h5>
                  <p className="mt-1">Zinzendorfschule Königsfeld</p>

                  {/* _Berufliche stationen_________________________________________________*/}
                  <h4 className="title is-4 pb-5 pt-6">language skills</h4>
                  <h4 className="subtitle is-4">
                    German : native language English: bla{" "}
                  </h4>
                  <h4 className="subtitle is-4">English: B1.Niveau </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Resume;
