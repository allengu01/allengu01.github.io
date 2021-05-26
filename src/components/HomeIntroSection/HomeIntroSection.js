import React from "react";
import * as styles from "./HomeIntroSection.module.css";
import * as animations from "../../styling/animations.module.css";

const HomeIntroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introContainer}>
                <div className={`${styles.hello} ${animations.fadeIn} ${animations.one}`}>Hi! I'm <span className={styles.name}>Allen Gu.</span></div>
                <div className={`${styles.description} ${animations.fadeIn} ${animations.two}`}>I’m a freshman at UC Berkeley studying Electrical Engineering and Computer Science.</div>
            </div>
        </div>
    )
}

export default HomeIntroSection;