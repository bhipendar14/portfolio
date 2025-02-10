import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <p className="projects-intro">
        Here are some of my best projects. Click on them to view more details.
      </p>

      <div className="projects-grid">
        {/* Project 1 */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>E-Commerce Website</h2>
             <p>-Developed a full-stack e-commerce platform with user authentication, dynamic product management,
             and responsive UI.
            <br/> -Implemented CRUD operations, secure payment gateway, and an admin dashboard for seamless product
             control.<br/> <br />
            <strong>Tech Stack:</strong><em> MongoDB, Express.js, React.js, Node.js, JavaScript, Vite.</em> <br /> <br /></p>
          <div className="project-links">
            <a href="https://b-market.vercel.app/" target="_blank" className="btn">Live</a>
            <a href="https://github.com/bhipendar14/B-Market" target="_blank" className="btn">GitHub</a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Bank Management System</h2>
          <p>Created a banking application where users can create accounts, transfer funds, withdraw money, and
            manage PIN settings securely.<br/><br/>
            <strong>Tech Stack:</strong><em> Java, Swing, MySQL (XAMPP), JFrame </em></p>
          <div className="project-links">
            <a href="https://github.com/bhipendar14/Bhipendar" target="_blank" className="btn">GitHub</a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Portfolio Website</h2>
          <p>My personal portfolio website showcasing my projects and skills.</p>
          <div className="project-links">
            <a href="https://github.com/bhipendar14/portfolio" target="_blank" className="btn">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
