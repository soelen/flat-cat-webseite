
import { FormEvent } from "react";
import "./Contact.scss"

function Contact() {

  const emailSubmit=(event:FormEvent)=> {
//event:FormEvent Ich gebe Typescript ein Typen mit da dieser es nicht Autom.Weiß
    event.preventDefault () 
// preventDefault: verhindere standard-verhalten (z.b die GET-Methode)

    const name = document.getElementById("name") as HTMLInputElement
    const message = document.getElementById("message") as HTMLInputElement

    window.location.replace(`mailto:example@example.me?subject=${name.value}&body=${message.value}`) 
  }
  return (
<div className= "Page-Contact">

    <h2 className="title is-2 is-capitalized has-text-black">Contact Me!</h2>
    {/* <form action="" method="get"> */}
    <form onSubmit={emailSubmit}>
        <div className="field">
            <label htmlFor="name" className="label is-size-4 has-text-weight-light"></label>
            <div className="control ">
                <input type="text" name="name" id="name" className="input is-primary" placeholder="Name" autoFocus />

            </div>
        </div>
        <div className="field">
            <label htmlFor="email" className="label is-size-4 has-text-weight-light"></label>
            <div className="control">
                <input type="email" name="email" id="email" className="input is-primary" placeholder="Email" />

            </div>
        </div>
        <div className="field ">
            <label htmlFor="message" className="label is-size-4 has-text-weight-light"></label>
            <textarea name="message" id="message" className="textarea is-medium is-primary" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="button is-size-5">Submit</button>
    </form>
  </div>

  );
}
export default Contact;


