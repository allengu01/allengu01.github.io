import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout/Layout.js";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.js";

const Projects = ({data}) => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Allen Gu - Projects</title>
                <link rel="canonical" href="http://allengu01.github.io/projects" />
            </Helmet>
            <ProjectsSection data={data}/>
        </Layout>
    )
}

export default Projects;

export const projectsQuery = graphql`
    query {
        allProjectsJson {
            edges {
                node {
                    id
                    title
                    description
                    labels
                    links {
                        default
                        github
                    }
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: NONE
                            )
                        }
                    }
                }
            }
        }
    }`