import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import HomeProjectItem from "./HomeProjectItem.js";
import HomeProjectShowcase from "./HomeProjectShowcase.js";
import {FaLongArrowAltRight} from "@react-icons/all-files/fa/FaLongArrowAltRight";
import * as styles from "./HomeProjectsSection.module.css";

const HomeProjectsSection = ({data}) => {
    const [active, setActive] = useState(0);
    const [size, setSize] = useState(0);
    const projectsData = data.allProjectsJson.edges;
    
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    const getNumDisplayed = () => {
        if (0 <= size && size <= 1000) {
            return 3;
        }
        else if (1000 < size && size <= 1440) {
            return 4;
        }
        else if (1440 < size && size < 1920) {
            return 5;
        }
        else {
            return 6;
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projectsContainer}>
                {projectsData.slice(0, getNumDisplayed()).map((data, id) => {
                    const project = data.node;
                    return (
                        <HomeProjectItem 
                            key={id}
                            id={`project-${id}`}
                            title={project.title}
                            link={project.link}
                            labels={project.labels}
                            description={project.description}
                            active={id === active}
                            onClick={() => {setActive(id)}} />
                    )
                    })}
            </div>
            <Link to="/projects" className={styles.link}>
                <div className={styles.arrowContainer}>
                    <span className={styles.arrowLabel}>
                        All Projects
                    </span>
                    <FaLongArrowAltRight className={styles.arrow}/>
                </div>
            </Link>
            <HomeProjectShowcase project={projectsData[active].node} />
        </div>
    )
}

export default HomeProjectsSection;