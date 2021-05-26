import React, {useState} from "react";
import { Link } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from "./Navbar.module.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <nav className={styles.navbar}>
                <Link className={styles.link} to="/">
                    <div className={styles.logoContainer}>
                        <StaticImage className={styles.logoImage} src={"../../images/logo.svg"} alt="Logo" />
                        <div className={styles.logoName}>Allen Gu</div>
                    </div>
                </Link>
                <div className={toggle ? `${styles.menuButton} ${styles.toggled}` : styles.menuButton} onClick={() => {setToggle(!toggle)}}>
                    <div className={styles.menuButtonBurger}></div>
                </div>
            </nav>
            <div className={toggle ? `${styles.menu} ${styles.toggled}` : styles.menu}>
                <Link to="projects" className={styles.link}>
                    <div className={toggle ? `${styles.menuItem} ${styles.toggled}` : styles.menuItem}>Projects</div>
                </Link>
                <Link to="resume" className={styles.link}>
                    <div className={toggle ? `${styles.menuItem} ${styles.toggled}` : styles.menuItem}>Resume</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
