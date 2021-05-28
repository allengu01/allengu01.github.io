import React from "react";
import * as styles from "./NavbarButton.module.css";

const NavbarButton = ({toggle, setToggle}) => {
    return (
        <div className={toggle ? `${styles.menuButton} ${styles.toggled}` : styles.menuButton} onClick={() => {setToggle(!toggle)}}>
            <div className={styles.menuButtonBurger}></div>
        </div>
    )
}

export default NavbarButton;