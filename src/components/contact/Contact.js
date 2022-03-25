import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>sulavadhikari17@gmail.com</h5>
           <a href="mailto:sulavadhikari17@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_icon' />
            <h4>Messenger</h4>
            <h5>Sulav Adhikari</h5>
           <a href='https:/m.me/sulabh.adhikari.96/' target="_blank">Send a message</a>
          </article>

        </div>

        <form action="">
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message"rows="7" placeholder='Your message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>

      </div>


    </section>
  )
}
