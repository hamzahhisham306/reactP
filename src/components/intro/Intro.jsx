import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/hamza.jfif';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>More than 1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>Full Stack Web Developer with a Background in Cyber Security. Passionate about using my
            knowledge to maximize efficiency while developing creative, customer focused solutions.
            Fluent in Arabic and have a professional level in English.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
          <div style={{ marginTop: "40px" }}>
            <h2>Experience</h2>
            <ul>
              <li style={{ marginTop: "14px" }}>

                1. As a Full Stack Developer at thelearnbook.com, I resolved bugs and added features to
                enhance functionality. I improved user experience by implementing new features and
                addressing performance issues. My contributions as a problem solver and collaborator
                improved the website's usability.
              </li>
            </ul>
            <li style={{ marginTop: "14px" }}>
              2. Frontend Developer at glyphsmarketing creating a user interface website or application it
              Involves designing and implementing the visual elements , layouts and features that users
              see and interact with
            </li>
            <li style={{ marginTop: "14px" }}>
              3. AI Prompt Engineer at MenaDevs:
              <ul>
                <li>    • As an AI Prompt Engineer at Menadevs, I design, develop, and test complex prompts that optimize AI models.
                </li>
                <li> •  My role extends beyond prompt creation to include coding for AI-driven tasks and refining AI-generated code.  </li>
                <li>• Successfully refactored AI-generated code to improve its performance and readability leading to higher-quality. </li>
                <li>   • Contributed to the continuous improvement of AI models by providing insights and feedback that led to optimization
                </li>
              </ul>

            </li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
