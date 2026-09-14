import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./PriceCTA.css";

function PriceCTA() {
  return (
    <section className="price-cta">
      <motion.div
        className="price-cta-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="price-cta-title">
          Ready when <em>you are</em>
        </h2>

        <p className="price-cta-description">
          Packages and payment plans are available on request — just ask at
          your consultation.
        </p>

        <Link to="/contact" className="price-cta-button">
          Book a consultation
        </Link>
      </motion.div>
    </section>
  );
}

export default PriceCTA;