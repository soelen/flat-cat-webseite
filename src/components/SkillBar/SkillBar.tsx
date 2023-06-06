import "./SkillBar.scss"

//Wiederverwendbare SkillBar
type SkillBarProps  = {
   title: string;
   value: number; 
   children?: JSX.Element;
  }
function SkillBar (props:SkillBarProps)  {
   return (
    <div>
{/* Skillbars */}
         <div className="skill-box">
            <span className='title has-text-black'>{props.title}</span>
            {props.children}
            <div className='skill-bar '>
{/*Ändere den schwarzen Balken*/}
               <span className='skill-per ' style={{width: `${props.value}%`}}>
{/* Erste Klammer = Achtung React! Hier kommt etwas Dynamisches. 2.Klammer: Obj. */}
                  <span className='tooltip'>{props.value}%</span>
               </span>
            </div>
         </div>

    </div>
   ) 
}


export default SkillBar