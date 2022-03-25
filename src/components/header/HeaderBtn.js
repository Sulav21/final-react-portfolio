import React from 'react'
import CV from '../../assets/cv.pdf'

export const HeaderBtn = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}