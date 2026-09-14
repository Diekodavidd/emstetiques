import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./FAQCTA.css";

function FAQCTA() {
  return (
    <section className="faq-cta">
      <motion.div
        className="faq-cta-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <h2 className="faq-cta-title">
          Still have a <em>question?</em>
        </h2>

        <p className="faq-cta-description">
          Message the clinic — no bots, no call centre. You'll get an answer
          from the person who would treat you.
        </p>

        <Link to="/contact" className="faq-cta-button">
          Contact the clinic
        </Link>
      </motion.div>
    </section>
  );
}

export default FAQCTA;