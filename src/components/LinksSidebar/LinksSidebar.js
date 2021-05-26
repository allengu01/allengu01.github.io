import React from "react";
import {Link} from "gatsby";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope";
import * as styles from "./LinksSidebar.module.css";

const LinksSidebar = () => {
    return (
        <div className={styles.linksContainer}>
            <a href="https://github.com/allengu01" id="github" target="_blank" rel="noreferrer">
                <FaGithub className={styles.icon}/>
            </a>
            <a href="https://www.linkedin.com/in/allengu01/" id="linkedin" target="_blank" rel="noreferrer">
                <FaLinkedin className={styles.icon}/>
            </a>
            <a href="mailto:allengu01@berkeley.edu" id="email" target="_blank" rel="noreferrer">
                <FaEnvelope className={styles.icon}/>
            </a>
            <hr className={styles.verticalLine} />
        </div>
    )
}

export default LinksSidebar;