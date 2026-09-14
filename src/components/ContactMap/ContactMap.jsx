import { motion } from "framer-motion";
import "./ContactMap.css";

function ContactMap() {
  return (
    <motion.div
      className="contact-map"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <span className="contact-map-label">
        Map embed — clinic location
      </span>
    </motion.div>
  );
}

export default ContactMap;