import React from 'react'
import { Row, Col } from 'react-bootstrap'
import justinpic from './JustinPic.jpg';
import ericpic from './derp.jpg';
import gabepic from './linkedinPictureReal.JPG';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function About() {
    return (
      <div id="aboutUs">
        <h1>About Us</h1>
        <Row>
          <Col>
            <h3>Eric Fricke</h3>
            <img
              src={ericpic}
              alt="ericpic"
              className="ericpic"
              id="aboutpics"
            ></img>
            <a
              href="https://github.com/e-fricke"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-fricke/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icons" />
            </a>
            <p>I'm a Full Stack Developer from Omaha, NE. I'm an Air Force veteran and recent Full Stack bootcamp grad. I aim to make a difference through my connection to the user experience while still providing end-to-end solutions.</p>
          </Col>
          <Col>
            <h3>Gabriel Lopez</h3>
            <img
              src={gabepic}
              alt="gabepic"
              className="gabepic"
              id="aboutpics"
            ></img>
            <a
              href="https://github.com/lopezg3000"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/lopezgabrieljs/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icons" />
            </a>
            <p>Hi. I'm Gabriel, a Front-end Developer with a passion for visual and responsive design.</p>
          </Col>
          <Col>
            <h3>Justin Geho</h3>
            <img
              src={justinpic}
              alt="justinpic"
              className="justinpic"
              id="aboutpics"
            ></img>
            <a href="https://github.com/JGeho" target="_blank" rel="noreferrer">
              <BsGithub className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/justin-geho/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icons" />
            </a>
            <p>Hello, I'm Justin. I recently made the decision to change my career path. I have always loved technology and anything innovative, so what's more innovative, technological, and interesting than the INTERNET? I chose to dive headfirst into software development. I love developing websites and apps that are both beautiful and functional, from the front-end all the way to the back-end. I gained my development skills through the DigitalCrafts Full-Stack Bootcamp program in 2021. I look forward to working with all of you to build bigger, better, and more advanced software for the future!!!</p>
          </Col>
        </Row>
        <Row>
          <a href='/SplashPage' className="aboutlink">Return to Login</a>
        </Row>
      </div>
    );
}

