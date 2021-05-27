import React from "react";
import * as styles from "./ResumeSection.module.css";

const ResumeSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Resume</h1>
            <div className={styles.resumeContainer}>
                <iframe className={styles.resume} src="https://drive.google.com/file/d/1Pj5twSPn8FVoqeUIUzdnzMAaL2xDRlEx/preview" width="640" height="480"></iframe>        
            </div>
        </div>
    )
}

export default ResumeSection;