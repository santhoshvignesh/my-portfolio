import React from "react";
import "./Contact.css";
import ContactBtn from "./ContactBtn";
function Contact() {
  return (
    <div className="ContactContainer">
      <div className="Line-1"></div>
      <div className="connect">Let's Connect!</div>
      <div className="Line-2"></div>
      <div className="ContactDescription">
        I’m open to collaborations, freelance opportunities, or just a friendly
        chat about design, development, and all things creative.
      </div>
      <div className="ContactBtn">
        <ContactBtn />
      </div>
      <div className="developer">
        <div className="MyProjectDeveloper">
          Designed and Develploped By VIGNESH A
        </div>
      </div>
    </div>
  );
}

export default Contact;
