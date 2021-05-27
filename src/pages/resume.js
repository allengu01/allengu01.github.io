import React from "react";
import {Helmet} from "react-helmet";
import Layout from "../components/Layout/Layout.js";
import ResumeSection from "../components/ResumeSection/ResumeSection.js";

const Resume = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Allen Gu - Resume</title>
                <link rel="canonical" href="http://allengu01.github.io/resume" />
            </Helmet>
            <ResumeSection />
        </Layout>
    )
}

export default Resume;