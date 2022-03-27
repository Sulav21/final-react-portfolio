import React from 'react'
import './header.css'
import { HeaderBtn } from './HeaderBtn'
import Me from '../../assets/2.jpg'
import { HeaderSocial } from './HeaderSocial'
import Typewriter from 'typewriter-effect';

export const Header = () => {
  return (
  <header>
    <div className="container header_container">
    <h5>Hello I'm</h5>
    <h1>Sulav Adhikari</h1>
    <h5 className="text-light type-writer">
    <Typewriter
  options={{
    strings: ['Front End Developer','UI/UX Designer', 'Html /CSS /JS /React Developer'],
    autoStart: true,
    loop: true,
  }}
/>
    </h5>
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
