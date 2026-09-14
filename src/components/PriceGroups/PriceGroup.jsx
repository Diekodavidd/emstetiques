import { motion } from "framer-motion";

function PriceGroup({ group, index }) {
  return (
    <motion.div
      className="price-group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.04, 0.25),
        ease: "easeOut",
      }}
    >
      <div className="price-group-heading">
        <h2 className="price-group-title">{group.title}</h2>

        <span className="price-group-note">{group.note}</span>
      </div>

      <div className="price-group-rows">
        {group.rows.map(([name, price]) => (
          <div className="price-row" key={`${name}-${price}`}>
            <span className="price-row-name">{name}</span>

            <span className="price-row-line" />

            <span className="price-row-price">{price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PriceGroup;