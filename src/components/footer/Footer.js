import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiFacebook} from 'react-icons/si'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Sulav.AD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/sulav21/' target="_blank" ><BsLinkedin/></a>
        <a href='https://github.com/Sulav21' target="_blank" ><FaGithub/></a>
        <a href='https://www.instagram.com/su.ad.21/' target="_blank" ><BsInstagram/></a>
        <a href='https://www.facebook.com/sulabh.adhikari.96/' target="_blank" ><SiFacebook/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Sulav.AD All rights reserved</small>
    </div>
    </footer>
  )
}
