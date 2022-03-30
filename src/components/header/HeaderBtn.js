import React from 'react'
import CV from '../../assets/Resume.pdf'

export const HeaderBtn = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" target='_blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
