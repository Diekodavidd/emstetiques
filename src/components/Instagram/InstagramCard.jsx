import { motion } from "framer-motion";

function InstagramCard({ post, index }) {
  return (
    <motion.a
      href={post.href}
      className="instagram-card"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <div className="instagram-card-placeholder">
        <span>{post.label}</span>
      </div>
    </motion.a>
  );
}

export default InstagramCard;