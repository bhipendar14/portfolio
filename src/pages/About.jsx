import { motion } from "framer-motion";
import "./About.css";
import { ImItalic } from "react-icons/im";

function About() {
  return (
    <section className="about">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="about-intro"
      >
        Hi, I'm <strong>Bhipendar Kumar</strong>, a passionate <strong>Full-Stack Developer</strong> specializing in <strong>MERN stack</strong>.  
        I am currently pursuing a <strong>Bachelor of Technology in Computer Engineering</strong> at <strong>Marwadi University</strong>(2022 - 2026).  
        I love building web applications that are scalable, efficient, and user-friendly.
      </motion.p>

      {/* Education Section */}
      <motion.div
        className="education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>🎓 Education</h2>
        <ul>
          <li><strong>Bachelor of Technology (B.Tech) - Computer Engineering</strong> <br />Marwadi University (2022 - 2026)</li><br />
          <li><strong>High School (Physics, Chemistry, Math)</strong> <br />Mahavir Public School (2021 - 2022) <br /> <strong><em>81%</em></strong></li>
          </ul>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="skills-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2>🚀 My Skills</h2>
        <div className="skills-list">
          <span>MERN Stack</span>
          <span>Fullstack</span>
          <span>REST API</span>
          <span>C</span>
          <span>Java</span>
          <span>C#</span>
          <span>React.js</span>
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
    </section>
  );
}

export default About;
