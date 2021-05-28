import React from "react";
import {motion} from "framer-motion";
import Project from "./Project.js";
import * as styles from "./ProjectsSection.module.css";

const ProjectsSection = ({data}) => {
    const projectsData = data.allProjectsJson.edges;
    const variants = {
        start: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        },
        end: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <motion.div className={styles.projectsContainer} initial="start" animate="end" variants={variants}>
                {projectsData.map((data, id) => {
                    const project = data.node;
                    return (
                        <Project 
                            project={project}    
                        />
                    )
                })}
            </motion.div>
        </div>
    )
}

export default ProjectsSection;