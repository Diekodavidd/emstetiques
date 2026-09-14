import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BrandCurve from "../BrandCurve/BrandCurve";
import "./ContactPageHero.css";

function ContactPageHero() {
  return (
    <section className="contact-page-hero">
      <motion.div
        className="contact-page-hero-container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="contact-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact &amp; booking</span>
        </div>

        <h1 className="contact-page-title">
          Book your <em>consultation</em>
        </h1>

        <BrandCurve />

        <p className="contact-page-description">
          Complimentary, no obligation, thirty minutes. Tell us what you'd
          like to change and we'll tell you honestly what's possible.
        </p>
      </motion.div>
    </section>
  );
}

export default ContactPageHero;