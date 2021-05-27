import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import HomeProjectItem from "./HomeProjectItem.js";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaLink} from "@react-icons/all-files/fa/FaLink";
import {FaLongArrowAltRight} from "@react-icons/all-files/fa/FaLongArrowAltRight";
import kMeans from "../../images/projects/k_means_visualizer.gif";
import findYourZen from "../../images/projects/find-your-zen.gif";
import * as styles from "./HomeProjectsSection.module.css";

const HomeProjectsSection = ({data}) => {
    const [active, setActive] = useState(0);
    const [size, setSize] = useState(window.innerWidth);
    const GIF_PROJECTS = {"k-Means Visualizer" : kMeans,
                          "Find Your Zen" : findYourZen};
    const projectsData = data.allProjectsJson.edges;
    
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    const getNumDisplayed = () => {
        console.log(size);
        if (0 <= size && size <= 920) {
            return 3;
        }
        else if (920 < size && size <= 1440) {
            return 4;
        }
        else if (1440 < size && size < 1920) {
            return 5;
        }
        else {
            return 6;
        }
    }

    const renderShowcase = () => {
        const project = projectsData[active].node;
        const image = getImage(project.image);
        return (
            <div className={styles.showcaseContainer}>
                <h1 className={styles.showcaseTitle}>
                    {project.title}
                </h1>
                <div className={styles.labelsContainer}>
                    {project.labels.map((label, id) => (
                        <div key={id} className={styles.label}>
                            {label}
                        </div>
                    ))}
                </div>
                <div className={styles.linksContainer}>
                    {project.links.github && 
                        <Link to={project.links.github} className={styles.link}>
                            <FaGithub className={styles.linkIcon} id="github"/>
                        </Link>
                    }
                    {project.links.default &&
                        <Link to={project.links.default} className={styles.link}>
                            <FaLink className={styles.linkIcon} id="default"/>
                        </Link>
                    }
                </div>
                <div className={styles.showcaseImageContainer}>
                    {(project.title in GIF_PROJECTS) ? 
                        <img className={styles.showcaseImage} src={GIF_PROJECTS[project.title]} alt={project.title}></img> :
                        <GatsbyImage className={styles.showcaseGatsbyImageContainer} imgClassName={styles.showcaseImage} objectFit="contain" image={image} alt={project.title} />
                    }
                </div>
            </div>
        )
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
            {renderShowcase()}
        </div>
    )
}

export default HomeProjectsSection;