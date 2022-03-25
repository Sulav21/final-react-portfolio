import React from 'react'
import './header.css'
import { HeaderBtn } from './HeaderBtn'
import Me from '../../assets/2.jpg'
import { HeaderSocial } from './HeaderSocial'

export const Header = () => {
  return (
  <header>
    <div className="container header_container">
    <h5>Hello I'm</h5>
    <h1>Sulav Adhikari</h1>
    <h5 className="text-light">Full-Stack Developer </h5>
    <HeaderBtn />
     <HeaderSocial />
  <div className="me">
    <div className="header_me">
    <img src={Me} alt="Sulav Adhikari" />
    </div>
  </div>
  
  <a href="#contact" className='scroll_down'>Scroll Down</a>

    </div>
  </header>

  )
}
