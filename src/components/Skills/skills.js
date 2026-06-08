import React from "react";
import "./skills.css";
import Frontend from "../../assets/frontend.png";
import Backend from "../../assets/backend.png";
import Database from "../../assets/database.png";
import Api from "../../assets/api.png";
import Cloud_Deploy from "../../assets/cloud_deploy.png";
import Git from "../../assets/git.png";
import AI from "../../assets/ai.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a full Stack Developer specializing in building web applications,
        AI-powered features, and automation testing. Experienced in frontend and
        backend development, API integration, databases, and deploying scalable,
        production-ready solutions with a focus on quality and performance.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Frontend} alt="Frontend" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">Frontend Development</h2>
            <p className="skillBarTextDesc">
              I build responsive and user-friendly interfaces using modern
              frontend technologies, focusing on performance, accessibility, and
              clean UI design.
            </p>
            <br />
            <p className="skillBarTextlan">
              HTML5, CSS3, JavaScript, React, Responsive Design
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Backend} alt="Backend" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">Backend Development</h2>
            <p className="skillBarTextDesc">
              I develop scalable backend systems and APIs to handle application
              logic, authentication, and data processing.
            </p>
            <br />
            <p className="skillBarTextlan">Node.js, Express.js, RESTful APIs</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Database} alt="Database" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">Database Management</h2>
            <p className="skillBarTextDesc">
              I design and manage structured databases with secure data handling
              and integration with frontend applications.
            </p>
            <br />
            <p className="skillBarTextlan">
              SQL, NoSQL, MongoDB, MariaDB, SQLite, Supabase, CRUD Operations
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Api} alt="Api" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">API Development</h2>
            <p className="skillBarTextDesc">
              I create robust and scalable APIs that enable seamless
              communication between different services and applications.
            </p>
            <br />
            <p className="skillBarTextlan">
              REST APIs, JSON, HTTP Methods, API Integration , AI API's
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={Cloud_Deploy}
            alt="Cloud Deployment"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">Cloud Deployment & Hosting</h2>
            <p className="skillBarTextDesc">
              Deploying and managing web applications in production environments
              using modern cloud platforms
            </p>
            <br />
            <p className="skillBarTextlan">Git, GitHub, Vercel, Bolt</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Git} alt="Git" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">Version Control</h2>
            <p className="skillBarTextDesc">
              I use Git for version control, enabling efficient collaboration
              and code management throughout the development lifecycle.
            </p>
            <br />
            <p className="skillBarTextlan">Git, GitHub</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AI} alt="AI" className="skillBarImg" />
          <div className="skillBarText">
            <h2 className="skillBarTextTitle">Artificial Intelligence</h2>
            <p className="skillBarTextDesc">
              I integrate AI-powered features into web applications built using
              modern platforms such as Bolt, enhancing user experience through
              AI APIs and custom AI solutions.
            </p>
            <br />
            <p className="skillBarTextlan">
              AI API Integration, OpenAI API, Chatbot development, Prompt
              engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
