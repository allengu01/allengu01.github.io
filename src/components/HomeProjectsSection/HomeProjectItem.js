import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as styles from "./HomeProjectItem.module.css";

const HomeProjectItem = ({title, labels, description, link, active, onClick}) => {
    const containerRef = useRef(null);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(containerRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);
    
    return (
        <div ref={containerRef} className={`${styles.container} ${active ? styles.active : ""}`} onClick={onClick}>
            <div className={styles.topContainer}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default HomeProjectItem