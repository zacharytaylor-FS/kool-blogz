import * as React from 'react'
import Layout from '../components/Layout/Layout'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

const AboutPage = ({children}) => {
    return (
        <>
        <Layout>
            
        <main style={pageStyles}>
            <h1>Kool Blogz</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            {children}
        </main>
        </Layout>
        </>
    )
}

export const Head = () => <title>About Kool Blogx</title>

export default AboutPage