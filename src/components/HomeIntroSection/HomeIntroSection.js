import React from "react";
import * as styles from "./HomeIntroSection.module.css";

const HomeIntroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introContainer}>
                <div className={`${styles.hello}`}>Hi! I'm <span className={styles.name}>Allen Gu.</span></div>
                <div className={`${styles.description}`}>I’m a freshman at UC Berkeley studying Electrical Engineering and Computer Science.</div>
            </div>
        </div>
    )
}

export default HomeIntroSection;