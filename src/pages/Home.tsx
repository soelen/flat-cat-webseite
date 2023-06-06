import './Home.scss'

function Home() {

// HomePictures
return (
  <div className="columns ">

    <div className="column is-7> textColumn">
      <h1 className="title has-text-black is-spaced">Hello and Welcome!</h1>
      <h6 className="subtitle has-text-black is-spaced">to my Webside</h6>
    </div>

    <div className="column is-one-third picColumn">
      <figure className="image01">
        <img id="homeimage01" src="/img/home/homepic.png" title="title01"/>
      </figure>
    </div>
  </div>
  )}
export default Home