import React from 'react';
import './ResumeSection.css';

function ResumeSection() {
    return (
        <div className="ResumeSection">
            <h1>Resume</h1>
            <div class="resume-container">
            <iframe title="resume-pdf" src="https://drive.google.com/file/d/1s-wVNnrK06reK8wRqFhF8aZADr0QGtdB/view?usp=sharing" width="640" height="480" target="_blank"></iframe>
            </div>
        </div>
    )
}

export default ResumeSection;
