import * as React from 'react'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

const FeedPage = () => {
    return (
        <main style={pageStyles}>
            <h1>Feed</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export const Head = () => <title>About Post</title>

export default FeedPage