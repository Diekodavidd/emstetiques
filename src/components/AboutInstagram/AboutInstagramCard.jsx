import { motion } from "framer-motion";

function AboutInstagramCard({ label, index }) {
  return (
    <motion.article
      className="about-instagram-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="about-instagram-placeholder">
        <span>{label}</span>
      </div>
    </motion.article>
  );
}

export default AboutInstagramCard;