import { Link } from "react-router-dom";

type navbarProps = {
  title: string;
}

function Navbar(props: navbarProps) {

  // Return => Funk. Reaktiven HTML Code generieren der asynchron auf Events reagiert
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <Link className="navbar-item" to="/resume">Resume</Link>
          <Link className="navbar-item" to="/artgallery">ArtGallery</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar