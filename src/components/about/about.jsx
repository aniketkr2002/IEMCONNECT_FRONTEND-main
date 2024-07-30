import React from 'react';
import NavBar from '../navbar/Navbar';
import './about.css';

function About() {
  return (
    <>
      <NavBar />
      <div className='about-container'>
        <h2>About</h2>
        <div className="about-content">
          <section>
            <h3>Introduction</h3>
            <p>
              Hello! My name is Aniket Kumar, and I am the creator of this website aimed at building a bridge of communication between senior and junior students of IEM (Institute of Engineering and Management). As a former student myself, I understand the importance of having a platform where students can easily connect, share resources, and collaborate with each other.
            </p>
          </section>
          <section>
            <h3>Motivation</h3>
            <p>
              The idea for this platform originated from my own experiences as a student at IEM. I often found it challenging to find a convenient way to exchange or purchase goods from other students, whether it be textbooks, electronics, or other items. This led me to envision a centralized platform where students could interact and trade goods seamlessly.
            </p>
          </section>
          <section>
            <h3>Goals</h3>
            <p>
              The primary goal of this website is to create a vibrant online community where students can not only buy and sell goods but also engage in meaningful interactions, share knowledge, and support each other's academic and personal endeavors. By facilitating these connections, I hope to enhance the overall student experience at IEM and contribute to a culture of collaboration and mutual aid.
            </p>
          </section>
          <section>
            <h3>Future Scope</h3>
            <p>
              Looking ahead, I have ambitious plans for the future of this platform. In addition to improving the user interface and functionality, I aim to introduce features such as a chatbox for real-time communication, a student credit system to facilitate transactions, and ratings for evaluating the behavior of users in managing goods and their condition for future exchanges. These enhancements will further streamline the user experience and foster trust and accountability within the community.
            </p>
          </section>
          <section>
            <h3>Conclusion</h3>
            <p>
              I am committed to continuously refining and expanding this platform to better serve the needs of the student community at IEM. I welcome feedback, suggestions, and collaboration from fellow students and stakeholders to help shape the future direction of this project. Thank you for being a part of this journey towards creating a more connected and supportive student community at IEM!
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
