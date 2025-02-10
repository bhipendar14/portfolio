import { motion } from "framer-motion";


import "./Home.css";

function Home() {
  return (
    <section className="home">

        
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span>Bhipendar Kumar</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="home-intro"
        >
          I am a passionate <strong>Full-Stack Developer</strong>specializing in <strong>MERN stack</strong>, backend systems, and cloud computing.  
          I have a strong foundation in <strong>React.js, Node.js, MongoDB, AWS, and MySQL</strong>, and I enjoy building <strong>scalable </strong> and <strong>user-friendly applications</strong>.
        </motion.p>

        <motion.div
          className="education"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>🎓 Education</h2>
          <p><strong>Bachelor of Computer Engineering</strong> (2022-2026) <br />Marwadi University</p>
          <p><strong>High School</strong> (2021-2022) <br />Mahavir Public School</p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="projects-overview"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2>💻 Notable Projects</h2>
          <ul>
            <li><h3>E-Commerce Website (MERN Stack)</h3> -Developed a full-stack e-commerce platform with user authentication, dynamic product management,
             and responsive UI.
            <br /> -Implemented CRUD operations, secure payment gateway, and an admin dashboard for seamless product
             control.<br /> <br />
            <strong>Tech Stack:</strong> MongoDB, Express.js, React.js, Node.js, JavaScript, Vite.</li><br />

            <li><h3>Bank Management System</h3> Created a banking application where users can create accounts, transfer funds, withdraw money, and
            manage PIN settings securely.<br/><br/>
            <strong>Tech Stack:</strong> Java, Swing, MySQL (XAMPP), JFrame</li>
          </ul>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>🚀 Skills</h2>
          <div className="skills-list">
            <span>React.js</span>
            <span>C</span>
            <span>Java</span>
            <span>C#</span>

            <span>Node.js</span>
            <span>MongoDB & MySQL</span>
            <span>Express.js</span>
            <span>JavaScript</span>
            <span>HTML & CSS</span>
            <span>UI/UX Design</span>
            <span>Git & GitHub</span>
            <span>Cloud Computing (AWS)</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2>📬 Connect with Me</h2>
          <a href="https://github.com/bhipendar14" target="_blank" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/bhipendar-kumar" target="_blank" className="btn">LinkedIn</a>
        </motion.div>
      </div>

      <motion.img
     
      src="/1.jpg"  
      alt="Bhipendar Kumar"
      className="home-img"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    />
     
    </section>
  );
}

export default Home;
