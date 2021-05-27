import React from "react";
import Project from "./Project.js";
import * as styles from "./ProjectsSection.module.css";

const ProjectsSection = ({data}) => {
    const projectsData = data.allProjectsJson.edges;
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projectsContainer}>
                {projectsData.map((data, id) => {
                    const project = data.node;
                    return (
                        <Project 
                            project={project}    
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsSection;