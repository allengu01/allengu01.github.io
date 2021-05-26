import * as React from "react";
import {graphql} from "gatsby";
import HomeProjectsSection from "../components/HomeProjectsSection/HomeProjectsSection.js";
import HomeIntroSection from "../components/HomeIntroSection/HomeIntroSection.js";
import Layout from "../components/Layout/Layout.js";
import * as styles from "../styling/index.module.css";

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <HomeIntroSection />
      <HomeProjectsSection projectsData={data.allProjectsJson.edges}/>
    </Layout>
  )
}

export default IndexPage;

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
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    }`
