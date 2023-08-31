
import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { ImMobile } from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef()


  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_4m70h0p', 'template_7l3fco5', form.current, '2BKXKj2_5CdK1SHl2')
      
    e.target.reset()

  };

  return (
  
    <section id='contact ' >
    {/* <h5>Get In Touch</h5> */}
    <h2 id="contact_margin">Contact Me</h2>

    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <AiOutlineMail />
          <h4>Email</h4>
          <h6>vaibhavdevkar101@gmail.com</h6>
          <a href='mailto:vaibhavdevkar2426@gmail.com' >Send to message</a>
        </article>

        <article className='contact_option'>
          <ImMobile />
          <h4>Mobile No</h4>
          <h6>+91 9673153514</h6>
          <a href='mailto:vaibhavdevkar2426@gmail.com' >Call us</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input className='textarea1' type="text" name="name" placeholder='Name' required />
        <input className='textarea1' type="text" name="email" placeholder='Email' required />
        <textarea className='textarea1' name='message' rows="7" placeholder="Your Message " required />
        <button  type='submit' className='btn btn-primary' onClick={() => window.alert("Email has send")}>Send message</button>
      </form>


    </div>


  </section>
   
  )
}

export default Contact