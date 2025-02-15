import { motion } from "framer-motion"; 
import "./About.css";

function About() {
  const technicalSkills = [
    "MERN Stack", "Fullstack", "REST API", "C", "Java", "C#", "React.js",
    "Node.js", "MongoDB & MySQL", "Express.js", "JavaScript", "HTML & CSS",
    "UI/UX Design", "Git & GitHub", "Cloud Computing (AWS)"
  ];

  const softSkills = [
    "Time Management", "Team Leadership", "Problem Solving", "Adaptability",
    "Communication", "Critical Thinking", "Collaboration", "Reading & Learning"
  ];

  return (
    <section className="about">
      {/* About Me Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="about-intro"
      >
        Hi, I'm <strong>Bhipendar Kumar</strong>, a passionate <strong>Full-Stack Developer</strong> specializing in <strong>MERN stack</strong>.  
        I am currently pursuing a <strong>Bachelor of Technology in Computer Engineering</strong> at <strong>Marwadi University</strong> (2022 - 2026).  
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
        
          
            <strong>Bachelor of Technology (B.Tech) - Computer Engineering</strong> <br /><br />
            Marwadi University (2022 - 2026)
          
          <br />
          <br />
          <br />
            <strong>High School (Physics, Chemistry, Math)</strong> <br /><br />    
            Mahavir Public School (2021 - 2022) <br />
            <strong><em>81%</em></strong>
          
        
      </motion.div>

      {/* Technical Skills Section */}
      <motion.div
        className="skills-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2>🚀 Technical Skills</h2>
        <div className="skills-list">
          {technicalSkills.map((skill, index) => (
            <motion.span
              key={index}
              className="skill-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills Section */}
      <motion.div
        className="skills-section soft-skills"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2>🌟 Soft Skills</h2>
        <div className="skills-list">
          {softSkills.map((skill, index) => (
            <motion.span
              key={index}
              className="skill-badge soft-skill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
