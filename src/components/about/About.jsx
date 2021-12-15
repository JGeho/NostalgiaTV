import React from 'react'
import justinpic from './JustinPic.jpg';
import ericpic from './JustinPic.jpg';
import gabepic from './JustinPic.jpg';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function About() {
    return (
        <div>
            <h1>About Us</h1>

            <h3>Eric Fricke</h3>
                <img src={ericpic} alt="ericpic" className="ericpic" id="aboutpics"></img>
                <a href="https://github.com/e-fricke" target="_blank" rel="noreferrer"><BsGithub className="icons"/></a>
                <a href="https://www.linkedin.com/in/eric-fricke/" target="_blank" rel="noreferrer"><BsLinkedin className="icons"/></a>
            <h3>Gabriel Lopez</h3>
                <img src={gabepic} alt="gabepic" className="gabepic" id="aboutpics"></img>
                <a href="https://github.com/lopezg3000" target="_blank" rel="noreferrer"><BsGithub className="icons"/></a>
                <a href="https://www.linkedin.com/in/lopezgabrieljs/" target="_blank" rel="noreferrer"><BsLinkedin className="icons"/></a>
            <h3>Justin Geho</h3>
                <img src={justinpic} alt="justinpic" className="justinpic" id="aboutpics"></img>
                <a href="https://github.com/JGeho" target="_blank" rel="noreferrer"><BsGithub className="icons"/></a>
                <a href="https://www.linkedin.com/in/justin-geho/" target="_blank" rel="noreferrer"><BsLinkedin className="icons"/></a>

        </div>
    )
}
