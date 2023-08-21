import React from 'react'
import './nav.css'
import { Link } from 'gatsby'
import logoUrl from '../images/kool-blogz.png'

function nav() {
  return (
    <nav className='nav'>
                <div className='brandLogo'>
                    <Link to='/'>
                        <img src={logoUrl} alt='Kool Blogz' width='64px' height='54px'/>
                    </Link>
                </div>
        <ul>
            <li className=''>
            </li>
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