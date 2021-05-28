import React from "react";
import {Link} from "gatsby";
import {motion} from "framer-motion";
import * as styles from "./NavbarItem.module.css";

const NavbarItem = ({to, name, toggle}) => {
    const variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            opacity: 0,
            y: 50,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        }
    }

    return (
        <motion.div variants={variants}>
            <Link to={to} className={styles.link}>
                <div className={styles.menuItem}>{name}</div>
            </Link>
        </motion.div>
    )
}

export default NavbarItem;