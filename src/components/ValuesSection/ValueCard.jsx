import { motion } from "framer-motion";

function ValueCard({ title, text, dotColor, index }) {
  return (
    <motion.article
      className="value-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <span
        className="value-card-dot"
        style={{ backgroundColor: dotColor }}
      />

      <h3 className="value-card-title">{title}</h3>

      <p className="value-card-text">{text}</p>
    </motion.article>
  );
}

export default ValueCard;