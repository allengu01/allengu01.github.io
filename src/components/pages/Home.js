import '../../App.css';
import React from 'react';
import HelloSection from '../HelloSection';
import AboutSection from '../AboutSection';
import ProjectCarousel from '../ProjectCarousel';

function Home() {
    return (
        <div>
            <HelloSection />
            <ProjectCarousel />
        </div>
    )
}

export default Home;
