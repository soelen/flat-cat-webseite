import "./SkillBar.scss"

//Wiederverwendbare SkillBar
type SkillBarProps  = {
   title: string;
   value: number;
  }

function SkillBar (props:SkillBarProps)  {
   return (
    <div className="container">

{/* Skillbars */}
         <div className="skill-box">
            <span className='title'>{props.title}</span>
            <div className='skill-bar'>
               {/*Ändere den schwarzen Balken*/}
               <span className='skill-per' style={{width: `${props.value}%`}}>
               {/* Erste Klammer = Achtung React! Hier kommt etwas Dynamisches. 2.Klammer: Obj. */}
                  <span className='tooltip'>{props.value}%</span>
               </span>
            </div>
         </div>

    </div>
   ) 
}


export default SkillBar