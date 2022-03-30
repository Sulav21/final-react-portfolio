import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com';
import  { useRef } from 'react';

export const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e270uf6', 'template_7oh8r2q', form.current, 'PD6aCV92gaP7efMe0')
    e.target.reset()
  };

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

        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message"rows="7" placeholder='Your message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>

      </div>


    </section>
  )
}
