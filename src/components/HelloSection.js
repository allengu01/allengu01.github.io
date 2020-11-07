import React from 'react';
import './HelloSection.css'

function HelloSection() {
    return (
        <div className="HelloSection">
            <div className="hello-container">
                <div className="intro">
                    <p id="hi">Hi! I'm</p>
                    <p id="name">Allen Gu</p>
                    <p id="description">
                        I’m a freshman at UC Berkeley studying Electrical Engineering and Computer Science.
                    </p>
                    <div className="icons">
                        <a href="https://github.com/allengu01" id="github" target="_blank" rel="noreferrer"><img alt="Github" src="./images/github.svg"></img></a>
                        <a href="https://www.linkedin.com/in/allengu01/" id="linkedin" target="_blank" rel="noreferrer"><img alt="Linkedin" src="./images/linkedin.png"></img></a>
                        <a href="mailto:allengu01@berkeley.edu" id="email" target="_blank" rel="noreferrer"><img alt="Email" src="./images/email.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HelloSection;
