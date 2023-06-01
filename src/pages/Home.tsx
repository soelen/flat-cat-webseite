import { createPopper } from '@popperjs/core';
import { usePopper } from 'react-popper';
import React, { useState } from 'react';
import './Home.scss'

function Home() {

// HomePictures
  return (
<div className="HomePics">

  <div>
    <figure className="image01">
      <img id="homeimage01" src="./public/img/home/homePic01.png" title="title01"/>
    </figure>
  </div>

  <div>
    <figure className="image02">
        <img id="homeimage02" src="./public/img/home/homePic02.png" title="title02"/>
    </figure>
  </div>

</div>
  )
}

export default Home