import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BrandCurve from "../BrandCurve/BrandCurve";
import "./AboutPageHero.css";

function AboutPageHero() {
  return (
    <section className="about-page-hero">
      <div className="about-page-hero-container">
        <motion.div
          className="about-page-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About us</span>
          </div>

          <h1 className="about-page-title">
            <em>About</em> Emstetiques
          </h1>

          <BrandCurve />

          <p className="about-page-description">
            A pharmacist-prescriber led clinic committed to enhancing your
            natural beauty in a safe, regulated, clinical environment —
            blending medical rigour with a genuinely personal approach.
          </p>
        </motion.div>

        <motion.div
          className="about-page-portrait"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          <div className="about-page-portrait-placeholder">
            {/* https://res.cloudinary.com/zy7u4nqi/image/upload/v1789398860/heroo_s56vkq.png */}
            <img
  src="https://res.cloudinary.com/zy7u4nqi/image/upload/v1789398860/heroo_s56vkq.png"
  alt="Emstetiques practitioner holding an aesthetic treatment syringe"
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPageHero;