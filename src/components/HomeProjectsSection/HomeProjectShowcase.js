import React, {useRef, useEffect} from "react";
import {Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaLink} from "@react-icons/all-files/fa/FaLink";
import kMeans from "../../images/projects/k_means_visualizer.gif";
import findYourZen from "../../images/projects/find-your-zen.gif";
import hohmannTransfer from "../../images/projects/hohmann-transfer-neat.gif";
import * as styles from "./HomeProjectShowcase.module.css";

const HomeProjectShowcase = ({project}) => {
    const image = getImage(project.image);
    const GIF_PROJECTS = {"k-Means Visualizer" : kMeans,
                          "Find Your Zen" : findYourZen,
                          "Hohmann Transfer - NEAT" : hohmannTransfer};
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(containerRef.current,
            {
                opacity: 0,
                x: 50
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <div ref={containerRef} className={styles.showcaseContainer}>
            <div className={styles.row}>
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