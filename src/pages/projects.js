import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout/Layout.js";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.js";

const Projects = ({data}) => {
    return (
        <Layout>
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