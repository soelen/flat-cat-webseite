import { Tooltip } from 'react-tooltip'
import './Home.scss'

function Home() {

  // HomePictures
  return (
  <div className="HomePics">

  <div>
    <figure className="image01">
      <img src="./public/img/home/homePic01.png"/>
    </figure>
  </div>
  
    <figure className="image02">
        <img src="./public/img/home/homePic02.png"/>
    </figure>

<a className="my-anchor-element" data-tooltip-content="Hello world!">
Click me :3
</a>

<Tooltip anchorSelect=".my-anchor-element" />
  </div>


  )
}

export default Home