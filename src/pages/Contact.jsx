import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      <p className="contact-intro">Feel free to reach out to me through any of the platforms below.</p>

      <div className="contact-container">
        {/* Email */}
        <motion.a
          href="mailto:kumarbhipendar31@gmail.com"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
          <p>kumarbhipendar31@gmail.com</p>
        </motion.a>

        {/* Phone */}
        <motion.div className="contact-card">
          <FaPhone className="contact-icon" />
          <span>Phone</span>
          <p>+91-8091220433</p>
        </motion.div>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/bhipendar-kumar"
          target="_blank"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
          <p>linkedin.com/in/bhipendar-kumar</p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/bhipendar14"
          target="_blank"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
          <p>github.com/bhipendar14</p>
        </motion.a>

        {/* Twitter */}
        <motion.a
          href="https://x.com/Bhipendar?t=qteP4M5BvI-NEvRyd6pVyQ&s=09"
          target="_blank"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaTwitter className="contact-icon" />
          <span>Twitter</span>
          <p>twitter.com/</p>
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;
