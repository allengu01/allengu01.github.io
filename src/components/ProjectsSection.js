import React from 'react'
import './ProjectsSection.css'
import {projectsData} from '../ProjectsData.js'
import Project from './Project.js'

function ProjectsSection() {
    return (
        <div className='ProjectsSection'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {projectsData.map((data, id) => {
                    return (
                        <Project 
                            id={id}
                            title={data.title}
                            link={data.link}
                            image={data.image}
                            labels={data.labels}
                            description={data.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsSection
