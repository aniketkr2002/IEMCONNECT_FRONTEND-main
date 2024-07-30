import React from 'react';
import NavBar from '../navbar/Navbar';
import './contact.css' 

function ContactUs() {
  return (
    <>
      <NavBar />
      <div className='contact-container'>
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            Name: Aniket Kumar<br />
            Department: Computer Science and Engineering (CSE)<br />
            Section: C<br />
            Batch: 2025<br />
            Email: rajputaniket2111@gmail.com<br />
            Address: Kestorpur, Kolkata<br />
          </p>
        </div>
        <div className="contact-info">
          <p>
            Name: Saif Hassan<br />
            Department: Computer Science and Engineering (CSE)<br />
            Section: C<br />
            Batch: 2025<br />
            Email: saif123@gmail.com<br />
            Address: Kestorpur, Kolkata<br />
          </p>
        </div>
        <div className="contact-info">
          <p>
            Name: Samridh Singh<br />
            Department: Computer Science and Bussiness Studies(CSBS)<br />
            Section: A<br />
            Batch: 2025<br />
            Email: Samridh0501@gmail.com<br />
            Address: Kestorpur, Kolkata<br />
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
