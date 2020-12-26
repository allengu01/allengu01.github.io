import React, {useState, useEffect} from 'react';
import {projectsData} from '../ProjectsData.js';
import Project from './Project.js';
import './ProjectCarousel.css';
import {Link} from 'react-router-dom';


function ProjectCarousel() {
    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(() => {
        function handleResize() {
            setSize(window.innerWidth);
            console.log(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return (
        <div className="ProjectCarousel">
            <h1>Projects</h1>
            <div className="projects-carousel-container">
                {projectsData.map((data, id) => {
                    var sections = 3;
                    if (size <= 960) sections = 1;
                    else if (size <= 1200) sections = 2;
                    console.log(sections);
                    if (id < sections) {
                        return (
                            <Project 
                                id={id}
                                show_info={false}
                                title={data.title}
                                link={data.link}
                                image={data.image}
                                labels={data.labels}
                            />
                        )
                    }
                })}
                <Link to="/projects" className="to-projects">
                    <i class="fas fa-angle-double-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCarousel
