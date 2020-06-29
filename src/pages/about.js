import React from 'react'
import Layout from '../components/layout'
import aboutStyles from '../styles/about.module.scss'
const AboutPage = () =>{
    return(
        <div>
            <Layout>
            <h1><u>About</u></h1>
            <p className={aboutStyles.aboutP}>
                The purpose of this website is to display the projects and activities I have worked on to further my professional career. 
                I plan to have a career in the technology field and use my skills to help further those in need.
            </p>
            <h2><u>Some Facts about me</u></h2>
            {/* ---------------------------------- */}
            <div className={aboutStyles.aboutList}>
                <li> Sophmore Computer Science major at Clemson</li>
                <li>I live in Hiram, Georgia</li>
                <li>I love the outdoors, reading, music, and dogs</li>
            </div>
            </Layout>
        </div>
    )
}

export default AboutPage