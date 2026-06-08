import React from "react";
import "./intro.css";
import Archana from "../../assets/archana.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <br />
        <span className="introText">
          I'm <span className="name">Archana</span> <br />
          <span className="introPosition">
            Full Stack Developer | <br />
            AI & Automation Testing
          </span>
        </span>
        <p className="introPara">
          I develop scalable web applications, AI-powered features,
          <br /> and improve software quality through automation testing,
          <br /> while continuously learning and adapting to modern
          <br /> technologies
        </p>
        {/* <div className="introBtn">
          <button className="btn">Download Resume</button>
          <button className="btn">View Resume</button> *
        </div> */}
      </div>
      <img
        src={Archana}
        alt="Archana"
        className="introImg"
        style={{ color: "#0F172A" }}
      />
    </section>
  );
}

export default Intro;
