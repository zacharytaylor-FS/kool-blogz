import React from 'react'
import './nav.css'
import { Link } from 'gatsby'

function nav() {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/post'>Post</Link>
            </li>
            <li>
                <Link to='/feed'>Feed</Link>
            </li>
        </ul>
    </nav>
  )
}

export default nav