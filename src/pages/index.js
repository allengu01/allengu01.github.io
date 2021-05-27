import * as React from "react";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";
import HomeProjectsSection from "../components/HomeProjectsSection/HomeProjectsSection.js";
import HomeIntroSection from "../components/HomeIntroSection/HomeIntroSection.js";
import Layout from "../components/Layout/Layout.js";
import * as styles from "../styling/index.module.css";

// markup
const IndexPage = ({data}) => {
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Allen Gu</title>
          <link rel="canonical" href="http://allengu01.github.io" />
        </Helmet>
      <HomeIntroSection />
      <HomeProjectsSection data={data}/>
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
                                placeholder: NONE
                            )
                        }
                    }
                }
            }
        }
    }`
