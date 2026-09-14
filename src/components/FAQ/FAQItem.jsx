import { motion } from "framer-motion";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>

        <span className="faq-sign">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      <motion.div
        className="faq-answer-wrapper"
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: {
            duration: 0.4,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.3,
          },
        }}
      >
        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default FAQItem;