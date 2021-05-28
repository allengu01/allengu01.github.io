import React from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaLink} from "@react-icons/all-files/fa/FaLink";
import kMeans from "../../images/projects/k_means_visualizer.gif";
import findYourZen from "../../images/projects/find-your-zen.gif";
import * as styles from "./HomeProjectShowcase.module.css";

const HomeProjectShowcase = ({project}) => {
    const image = getImage(project.image);
    const GIF_PROJECTS = {"k-Means Visualizer" : kMeans,
                          "Find Your Zen" : findYourZen};

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

export default HomeProjectShowcase;