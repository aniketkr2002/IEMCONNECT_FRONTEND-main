import React from 'react';
import NavBar from '../navbar/Navbar';
import './Guidance.css'; // Importing CSS file for styling

function Guidance() {
  return (
    <>
      <NavBar />
      <div className='siror'>
        <h2>Guidance</h2>
        <p>
          Welcome to our guidance page!<strong>Saif hassan</strong>, a software engineering student, seeks some advice on coding and studying. Here are some tips for him:
        </p>
        <div className="tips-container">
          <div className="coding-tips">

            <h3>Coding Tips-:</h3>
            <ul>
              <li><strong>Practice Regularly:</strong> Consistent practice is key to improving coding skills. Set aside dedicated time each day to work on coding projects or practice coding exercises.</li>
              <li><strong>Work on Projects:</strong> Building real-world projects can help reinforce your understanding of coding concepts and technologies. Start with small projects and gradually increase their complexity.</li>
              <li><strong>Seek Feedback:</strong> Don't hesitate to seek feedback from peers, mentors, or online communities. Constructive criticism can help you identify areas for improvement.</li>
              <li><strong>Stay Updated:</strong> The field of software engineering is constantly evolving. Stay updated with the latest trends, technologies, and best practices by reading blogs, attending webinars, or participating in online courses.</li>
            </ul>
          </div>
          <div className="studying-tips">
            <h3>Studying Tips:</h3>
            <ul>
              <li><strong>Manage Your Time:</strong> Create a study schedule that allows you to balance your coursework, projects, and personal time effectively.</li>
              <li><strong>Use Multiple Resources:</strong> Don't rely solely on one source for studying. Utilize textbooks, online tutorials, videos, and other resources to gain a comprehensive understanding of the subject matter.</li>
              <li><strong>Stay Organized:</strong> Keep your study materials, notes, and assignments well-organized to avoid confusion and save time when reviewing.</li>
              <li><strong>Take Breaks:</strong> Don't forget to take regular breaks during study sessions to avoid burnout and maintain productivity. Short breaks can help improve focus and concentration.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guidance;
