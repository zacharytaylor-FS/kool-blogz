import * as React from 'react'
import Nav from '../components/nav'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

const AboutPage = ({children}) => {
    return (
        <>
        <Nav />
        <main style={pageStyles}>
            <h1>Kool Blogz</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            {children}
        </main>
        </>
    )
}

export const Head = () => <title>About Kool Blogx</title>

export default AboutPage