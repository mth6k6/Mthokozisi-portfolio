import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


export const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm ('service_dzv4je8', 'template_2l3m46a', form.current, 'dF3ooLPZ-4L7TZn0JMipi')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section id="contactPage">    
         <div id="experience">
                <h1 className='contactPageTittle'>Experience</h1>
                <p className='experienceDis'>I am still looking for the Internship that aligned with my field of study (Software Development).</p>
            
            <div className='expIcons'>
                    <div className='expIconText'> 
                    <h2>IT Support</h2>
                    <p>Desktop Technician  at eThekwini Municipality</p>
                    </div>
            </div>

            <div className='expIcons'>
                    <div className='expIconText'> 
                    <h2>Software Development</h2>
                    <p>Junior Software Developer  at Promed Technologies</p>
                    </div>
            </div>
        </div>

            <div id="contact">
                    <h1 className="contactPageTittle">Contact Me</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opputunity.</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='your name' name='your_name'/>
                        <input type="email" className="email" placeholder='your email' name='your_email'/>
                        <textarea className="msg" name="message" rows="5" placeholder='your message'></textarea>
                        <button type='submit' value='send' className="submitBtn">Submit</button>
                    </form>
            </div>
            </section>
  );
}
export default Contacts;