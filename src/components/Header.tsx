import { useState } from 'react'

type HeaderProps  = {
    title: string;
   }

function Header(props:HeaderProps) {

// Return => Funk. Reaktiven HTML Code generieren der asynchron auf Events reagiert
  return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://flatcat.netlify.app/">
      <img src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">

      <a className="navbar-item">
        Resume
      </a>

      <a className="navbar-item">
        Contact
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>

          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>

        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header