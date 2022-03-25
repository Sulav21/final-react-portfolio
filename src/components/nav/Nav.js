import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

export const Nav = () => {
  const [name, setName] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setName('#')} className={name === '#'?'active':'' }><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setName('#about')} className={name==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setName('#ab')} className={name==='#ab'?'active':''}><BiBookAlt/></a>
      <a href="#projects" onClick={()=>setName('#abo')} className={name==='#abo'?'active':''}><RiServiceLine/></a>
      <a href= "#contact" onClick={()=>setName('#abou')} className={name==='#abou'?'active':''}><BiMessageDetail/></a>
    </nav>
  )
}
