import React from "react"
import {Link,graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"

const IndexPage = () => {
  const query = useStaticQuery(graphql `
    query{
      fileName: file(relativePath: {eq: "images/IMG_1797.JPG"}) {
        childImageSharp{
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }  
  `)
  return(
    <Layout>
      <h1>Hello!</h1>
      <h2>I am Tahj, an aspiring front end developer, living in Georgia</h2>
      <Img fluid={query.fileName.childImageSharp.fluid} alt="@"/>
      <p>I am a sophmore Computer science major at Clemson University (go tigs). </p>
      <p>Need a developer?<Link to="/contact">Contact me</Link></p>
    </Layout>
  )

}

export default IndexPage 