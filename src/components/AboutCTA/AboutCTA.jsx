import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="about-cta">
      <motion.div
        className="about-cta-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="about-cta-title">
          Join us on the journey to{" "}
          <em>the best version of you</em>
        </h2>

        <Link to="/contact" className="about-cta-button">
          Book a consultation
        </Link>
      </motion.div>
    </section>
  );
}

export default AboutCTA;