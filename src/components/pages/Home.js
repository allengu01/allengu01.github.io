import '../../App.css';
import React from 'react';
import HelloSection from '../HelloSection';
import AboutSection from '../AboutSection';
import ProjectsSection from '../ProjectsSection';

function Home() {
    return (
        <div>
            <HelloSection />
            <AboutSection />
            <ProjectsSection />
        </div>
    )
}

export default Home;
