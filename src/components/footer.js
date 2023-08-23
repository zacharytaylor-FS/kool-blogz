import React from 'react'
import './footer.css'
import logoUrl from '../images/kool-blogz.png'


function footer(){
  return (
    <footer>
      <div>
        <img src={logoUrl} alt='Kool Blogz Logo' width='56px'/>
      </div>
      <p>Footer</p>
      <ul>
        <li>list </li>
        <li>list </li>
        <li>list </li>
      </ul>
    </footer>
  )
}

export default footer
