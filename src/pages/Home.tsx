import "./Home.scss";

function Home() {
  // HomePictures
  return (
  <div className="Home">
    <section className="introduction">
      <div className="container">
        <div className="columns my-0">
          <div className="column is-7 textColumn">
            <div className="mt-5">FlatCat: Developer and Artist</div>
            <h1>Hi! My Name is Jenni! Nice to meet you!</h1>
            <button className="button is-medium is-primary mr-5">My skills</button>
            <button className="button is-medium is-link">Github</button>
          </div>

          <div className="column is-3 py-0 picColumn">
              <img className="is-block" id="homeimage01" src="/img/home/homepic.png" title="title01" />
          </div>
        </div>
      </div>
    </section>
    <section className="contact">
      {/* Add contact here */}
    </section>

    <div className="column is-7 textColumn">
      <h1 className="title has-text-black is-spaced">Hello and Welcome!</h1>
      <h6 className="subtitle has-text-black is-spaced">to my Webside</h6>
    </div>

    <div className="column is-one-third picColumn">
      <figure className="image01">
        <img id="homeimage01" src="/img/home/homepic.png" title="title01"/>
      </figure>
    </div>
  </div>
  );
}
export default Home;
