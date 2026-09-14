import { motion } from "framer-motion";
import BrandCurve from "../BrandCurve/BrandCurve";
import ValueCard from "./ValueCard";
import values from "../../data/values";
import "./ValuesSection.css";

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-section-container">
        <motion.div
          className="values-section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="values-section-title">
            What we <em>stand for</em>
          </h2>

          <BrandCurve />
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              title={value.title}
              text={value.text}
              dotColor={value.dotColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;