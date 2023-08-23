import React from 'react'
import './Header.css'
import { Link } from 'gatsby'
import Nav from './nav'
import logoUrl from '../images/kool-blogz.png'

const Header = () => {
    return (
        <header>
            <div className='brandLogo'>
                    <Link to='/'>
                        <img src={logoUrl} alt='Kool Blogz' width='64px' height='54px'/>
                    </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header