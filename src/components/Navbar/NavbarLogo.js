import React from "react";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as styles from "./NavbarLogo.module.css";

const NavbarLogo = () => {
    return (
        <Link className={styles.link} to="/">
            <div className={styles.logoContainer}>
                <StaticImage className={styles.logoImage} src={"../../images/logo.svg"} alt="Logo" placeholder="none"/>
                <div className={styles.logoName}>Allen Gu</div>
            </div>
        </Link>
    )
}

export default NavbarLogo;