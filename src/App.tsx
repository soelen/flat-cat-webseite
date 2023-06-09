import './App.scss'

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route }
  from "react-router-dom";

import "./App.scss";
import Home from './pages/Home'
import Contact from './components/Contact/Contact'
import Resume from "./pages/Resume";
import ArtGallery from "./pages/ArtGallery.tsx";
import 'react-tooltip/dist/react-tooltip.css'

function App() {
// App ist dafür da wie App allg. Definiert. Und seitenstruktur festzulegen 

// import HtmlWebpackPlugin from 'html-webpack-plugin';

  return (

    <Router>
    <Navbar title="Navbar"></Navbar> 

      <Routes>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/" element={<Home/>}/>

        <Route path="/artgallery" element={<ArtGallery/>}/>

        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https:google.com">Mutti</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>

    </Router>


  )
}
// Return => Funktion. Generiere reaktiven HTML Code, der synchron auf Events reagiert.

export default App
