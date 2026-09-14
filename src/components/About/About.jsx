import { motion } from "framer-motion";
import "./About.css";
// import jase from 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1789398860/heroo_s56vkq.png'
import avatar from "./emstetiques-avatar-512.png";

import jasas from './sax.png'
import { Link, NavLink } from "react-router-dom";

import BrandCurve from "../BrandCurve/BrandCurve";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-visual-wrapper"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="about-visual">
  <img
  src="https://res.cloudinary.com/zy7u4nqi/image/upload/v1789398860/heroo_s56vkq.png"
  alt="Emstetiques practitioner holding an aesthetic treatment syringe"
/>
          </div>

          <div className="about-logo">
            <img
              src={avatar}
              alt="Emstetiques emblem"
            />
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="about-eyebrow">Why choose us</p>

          <h2 className="about-title">
            <em>Why choose</em> Emstetiques?
          </h2>

          <BrandCurve />

          <p className="about-description">
            At Emstetiques we go beyond aesthetics — we focus on harmonising
            your features for balanced, natural results. Led by a qualified
            pharmacist independent prescriber with a commitment to safety and
            precision, we use refined techniques so you leave looking, and
            feeling, your best.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-number">01</div>

              <div className="about-feature-title">
                Prescriber-led safety
              </div>

              <p>
                Medical training behind every consultation, product choice and
                aftercare plan.
              </p>
            </div>

            <div className="about-feature">
              <div className="about-feature-number">02</div>

              <div className="about-feature-title">
                Natural, balanced results
              </div>

              <p>
                Enhancements that read as you, rested — never overdone, never
                generic.
              </p>
            </div>
          </div>

          <NavLink to="/about"
            
            className="about-link"
          >
            Learn more about us
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default About;