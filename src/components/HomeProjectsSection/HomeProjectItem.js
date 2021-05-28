import React from "react";
import * as styles from "./HomeProjectItem.module.css";

const HomeProjectItem = ({title, labels, description, link, active, onClick}) => {
    return (
        <div className={`${styles.container} ${active ? styles.active : ""}`} onClick={onClick}>
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