import React from "react";
import {motion} from "framer-motion";
import * as styles from "./HomeIntroSection.module.css";

const HomeIntroSection = () => {
    const containerVariants = {
        start: {
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        },
        enter: {
            transition: { staggerChildren: 0.2, delayChildren: 0.4 }
        }
    }

    const itemVariants = {
        start: {
            x: -20,
            opacity: 0,
            transition: {
                duration: 0.5,
                velocity: 1,
                stiffness: 1000
            }
        },
        enter: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                stiffness: 1000
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.introContainer} >
                <motion.div initial="start" animate="enter" variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <div className={`${styles.hello}`}>Hi! I'm <span className={styles.name}>Allen Gu.</span></div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <div className={`${styles.description}`}>I’m a second-year at UC Berkeley studying Electrical Engineering and Computer Science.</div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeIntroSection;