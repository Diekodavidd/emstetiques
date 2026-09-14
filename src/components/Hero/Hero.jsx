
import { motion } from "framer-motion";
import "./Hero.css";
import { Link, NavLink } from "react-router-dom";
// import heroImage from "";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">Advanced facial aesthetics</p>

          <h1 className="hero-title">
            Refine. Define.
            <br />
            <em>Enhance.</em>
          </h1>

          <p className="hero-description">
            Expert-led aesthetic treatments designed to sculpt, rejuvenate and
            elevate your natural beauty. From subtle enhancements to full
            facial contouring, we create bespoke results that complement your
            unique features.
          </p>

          <div className="hero-actions">
           <NavLink to="/book-us" className="hero-primary">
              Book your consultation
            </NavLink>

                <NavLink to="/treatments"
                              className="hero-secondary"

                >              View treatments
</NavLink>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">GPhC</div>
              <div className="hero-stat-label">Registered prescriber</div>
            </div>

            <div className="hero-stat">
              <div className="hero-stat-value">1,200+</div>
              <div className="hero-stat-label">Treatments delivered</div>
            </div>

            <div className="hero-stat">
              <div className="hero-stat-value">5.0</div>
              <div className="hero-stat-label">Average client rating</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="hero-visual-border"></div>

         <div className="hero-portrait">
  <img
    src="https://res.cloudinary.com/zy7u4nqi/image/upload/v1789398859/hero1_q6uchi.jpg"
    alt="Facial aesthetics treatment"
  />
</div>

          <div className="hero-badge">
            <span className="hero-badge-icon">Em</span>

            <span className="hero-badge-text">
              <span>Independent prescriber</span>
              <span>Every plan, clinically led</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
