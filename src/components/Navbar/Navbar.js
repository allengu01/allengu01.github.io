import React, {useState} from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import NavbarLogo from "./NavbarLogo.js";
import NavbarButton from "./NavbarButton.js";
import NavbarItem from "./NavbarItem.js";
import * as styles from "./Navbar.module.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    }
    return (
        <div>
            <nav className={styles.navbar}>
                <NavbarLogo />
                <NavbarButton toggle={toggle} setToggle={setToggle}/>
            </nav>
            <motion.div className={toggle ? `${styles.menu} ${styles.toggled}` : styles.menu}
                        initial={false} animate={toggle ? "open" : "closed"} variants={variants}>
                <NavbarItem to="/" name="Home" toggle={toggle} />
                <NavbarItem to="/projects" name="Projects" toggle={toggle} />
                <NavbarItem to="/resume" name="Resume" toggle={toggle} />
            </motion.div>
        </div>
    )
}

export default Navbar;
