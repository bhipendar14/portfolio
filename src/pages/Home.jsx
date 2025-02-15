import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-header">
        <motion.img
          src="/1.jpg"
          alt="Bhipendar Kumar"
          className="home-img"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="neon-text"
        >
          Hi, I'm <span>Bhipendar Kumar</span>
        </motion.h1>
      </div>

      <motion.div className="home-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}>
        <p className="home-intro">
        <strong>👋 Hi, I'm Bhipendar Kumar.</strong> I am passionate Full-Stack Developer specializing in MERN stack. 
        I am currently pursuing a Bachelor of Technology in Computer Engineering at Marwadi University(2022 - 2026). 
        I love building web applications that are scalable, efficient, and user-friendly. I like to Learning new things and problem solving.        
        </p>
      </motion.div>

      <div className="home-grid">
        <motion.div className="neon-box" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <h2>🎓 Education</h2>
          <p><strong>Bachelor of Computer Engineering</strong> (2022-2026) <br /> Marwadi University</p><br />
          <p><strong>High School</strong> (2021-2022) <br /> Mahavir Public School</p><br />
        </motion.div>
        

        <motion.div className="neon-box" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}>
          <h2>🚀 B-Market ⭐</h2>
          <p><ul><li>Developed a full-stack e-commerce platform with user authentication, dynamic product management, and responsive UI.</li>
          <li>Implemented CRUD operations, secure payment gateway, and an admin dashboard for seamless product control.
          </li></ul></p>
          <strong>Tech Stack: MongoDB, Express.js, React.js, Node.js, JavaScript, Vite</strong>
          <div className="project-links">
            <a href="https://b-market.vercel.app/" target="_blank" className="btn neon-btn">Live</a>
            <a href="https://github.com/bhipendar14/B-Market" target="_blank" className="btn neon-btn">GitHub</a>
          </div>
        </motion.div>
      </div>

      <div className="home-grid">
        <motion.div className="neon-box" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1 }}>
          <h2>🚀 Technical Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.span key={index} whileHover={{ scale: 1.1 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="neon-box" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 1.2 }}>
          <h2>🌟 Soft Skills</h2>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <motion.span key={index} whileHover={{ scale: 1.1 }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="contact-links neon-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }}>
        <h2>📬 Connect with Me</h2>
        <a href="https://github.com/bhipendar14" target="_blank" className="btn neon-btn">GitHub</a> <></>
        <a href="https://www.linkedin.com/in/bhipendar-kumar" target="_blank" className="btn neon-btn">LinkedIn</a>
      </motion.div>
    </section>
  );
}

const skills = [
  "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "AWS", "C", "Java", "C#", "HTML & CSS", "UI/UX Design", "Git & GitHub"
];

const softSkills = [
  "Time Management", "Team Leadership", "Problem Solving", "Adaptability", "Communication", "Critical Thinking", "Collaboration", "Reading & Learning"
];

export default Home;
