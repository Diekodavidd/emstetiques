import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import BrandCurve from "../BrandCurve/BrandCurve";

import "./FAQsPageHero.css";

function FAQsPageHero() {
  return (
    <section className="faqs-page-hero">
      <motion.div
        className="faqs-page-hero-container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="faqs-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>FAQs</span>
        </div>

        <h1 className="faqs-page-title">
          General <em>FAQs</em>
        </h1>

        <BrandCurve />

        <p className="faqs-page-description">
          The questions we're asked most, answered plainly. Anything else —
          message the clinic and you'll speak to your prescriber directly.
        </p>
      </motion.div>
    </section>
  );
}

export default FAQsPageHero;