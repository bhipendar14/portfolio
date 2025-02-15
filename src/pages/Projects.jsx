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
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {/* Highlighted Top Project */}
          <motion.div
            className="project-card highlight"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{projectsData[0].title}</h2>
            <p>{projectsData[0].description}</p>
            <strong>Tech Stack:</strong> {projectsData[0].techStack}
            <div className="project-links">
              {projectsData[0].liveLink && (
                <a href={projectsData[0].liveLink} target="_blank" className="btn glow">Live</a>
              )}
              <a href={projectsData[0].github} target="_blank" className="btn glow">GitHub</a>
            </div>
          </motion.div>

          {/* Other Projects */}
          {projectsData.slice(1).map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <strong>Tech Stack:</strong> {project.techStack}

              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" className="btn glow">Live</a>
                )}
                <a href={project.github} target="_blank" className="btn glow">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  const projectsData = [
    {
      title: "B-Market",
      description: "Developed a full-stack e-commerce platform with user authentication, dynamic product management, and responsive UI",
      techStack: "MongoDB, Express.js, React.js, Node.js, JavaScript, Vite",
      liveLink: "https://b-market.vercel.app/",
      github: "https://github.com/bhipendar14/B-Market",
    },
    {
      title: "Bank Management System",
      description: "A banking app where users can create accounts, transfer funds, and manage security settings.",
      techStack: "Java, Swing, MySQL, JFrame, JavaScript",
      github: "https://github.com/bhipendar14/Bhipendar",
    },
    {
      title: "C# CRUD App",
      description: "A CRUD application using C# and SQL Server for easy data management.",
      techStack: "C#, Java, JavaScript, SQL Server, MySQL, MVC",
      github: "https://github.com/bhipendar14/C-",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my projects and skills.",
      techStack: "React, Vite, JavaScript, CSS",
      github: "https://github.com/bhipendar14/portfolio",
    },
    {
      title: "E-Commerce (CRUD)",
      description: "A CRUD-based e-commerce site with React, MongoDB, and secure authentication.",
      techStack: "MongoDB, Express.js, React.js, Node.js, Vite",
      github: "https://github.com/bhipendar14/bhipendar14",
    },
  ];

  export default Projects;
