import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <img src="/profile_photo.JPG" alt="Profile Photo" className="profile-photo" />
      <p>
        I’m a passionate Computer Science student at Sharda University, specializing in full-stack development with the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy building responsive, user-focused web applications and have experience with JavaScript, RESTful APIs, and database management. I’m skilled in version control with Git and GitHub, and I’m committed to creating scalable, maintainable solutions. Through projects like a portfolio CMS, a hotel rental platform, and a weather widget, I’ve honed my skills in both frontend and backend development. I’m eager to contribute to innovative projects and grow as a developer!
      </p>
      
      <br></br>
      <br></br>
      <h2>My Skills</h2>
      <div className="skills-section">
        <h3>Programming & Development</h3>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
        </ul>
        <h3>Frontend & UI</h3>
        <ul>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Backend & Database</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful APIs</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
        <h3>Version Control & Collaboration</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default About;