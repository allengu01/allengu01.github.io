import React from "react";
import Navbar from "../Navbar/Navbar.js";
import LinksSidebar from "../LinksSidebar/LinksSidebar.js";
import * as styles from "./Layout.module.css";

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                {children}
            </div>
            <LinksSidebar />
        </div>
    )
}

export default Layout;