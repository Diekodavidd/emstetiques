import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import treatments from "../../data/treatments";
import TreatmentCard from "./TreatmentCard";
import BrandCurve from "../BrandCurve/BrandCurve";

import "./Treatments.css";

function Treatments() {
  return (
    <section id="treatments" className="treatments-section">
      <div className="treatments-container">
        <motion.div
          className="treatments-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="treatments-heading-content">
            <p className="treatments-eyebrow">
              Signature menu
            </p>

            <h2 className="treatments-title">
              <em>Our specialist</em> treatments
            </h2>

            <BrandCurve />
          </div>

          <NavLink to="/treatments"
            className="treatments-price-link"
          >
            See full price list
          </NavLink>
        </motion.div>

        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.name}
              treatment={treatment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Treatments;