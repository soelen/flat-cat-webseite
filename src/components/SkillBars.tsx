import { useState } from 'react'
import "../index.scss"

function SkillBars ()  {
   return (
    <div className="container">
      <h1 className="ProgressBars">React Progress Bar </h1>
{/* HTML */}
         <div className="skill-box">
            <span className='title'>HTML</span>
            <div className='skill-bar'>
               <span className='skill-per html'>
                  <span className='tooltip'>35%</span>
               </span>
            </div>
         </div>

{/* CSS */}
         <div className="skill-box">
            <span className='title'>CSS</span>
            <div className='skill-bar'>
               <span className='skill-per css'>
                  <span className='tooltip'>28%</span>
               </span>
            </div>
         </div>

    </div>
   ) 
}


export default SkillBars