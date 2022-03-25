import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiFacebook} from 'react-icons/si'

export const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href='https://www.linkedin.com/in/sulav21/' target="_blank" ><BsLinkedin/></a>
        <a href='https://github.com/Sulav21' target="_blank" ><FaGithub/></a>
        <a href='https://www.instagram.com/su.ad.21/' target="_blank" ><BsInstagram/></a>
        <a href='https://www.facebook.com/sulabh.adhikari.96/' target="_blank" ><SiFacebook/></a>
    </div>
  )
}
