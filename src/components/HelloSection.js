import React from 'react';
import './HelloSection.css'

function HelloSection() {
    return (
        <div className="HelloSection">
            <div className="hello-container">
                <div className="intro-container">
                    <p id="hi">Hi! I'm <a id="name">Allen.</a></p>
                    <p id="description">
                        I’m a freshman at UC Berkeley studying Electrical Engineering and Computer Science.
                    </p>
                    <div className="icons">
                        <a href="https://github.com/allengu01" id="github" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/allengu01/" id="linkedin" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                        <a href="mailto:allengu01@berkeley.edu" id="email" target="_blank" rel="noreferrer"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HelloSection;
