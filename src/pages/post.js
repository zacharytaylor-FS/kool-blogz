import * as React from 'react'
import Layout from '../components/Layout/Layout'

const pageStyles = {
    color: "#232129",
    padding: 66,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const PostPage = () => {
    return (
        <>
        <Layout>

        <main style={pageStyles}>
            <h1>Post</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
        </Layout>
        </>
    )
}

export const Head = () => <title>Post</title>

export default PostPage