import { motion } from "framer-motion";
import "./TreatmentCTA.css";
import { Link, NavLink } from "react-router-dom";

function TreatmentCTA() {
  return (
    <section className="treatment-cta">
      <motion.div
        className="treatment-cta-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="treatment-cta-title">
          Not sure which treatment{" "}
          <em>is right for you?</em>
        </h2>

        <p className="treatment-cta-description">
          Book a complimentary consultation. We'll assess your face, talk
          through options and give you an honest plan — including doing
          nothing at all.
        </p>

        <div className="treatment-cta-actions">
                    <NavLink to="/contact"
 className="treatment-cta-primary">
            Book a consultation
          </NavLink>

                    <NavLink to="/pricelist"
 className="treatment-cta-secondary">
            See price list
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
}

export default TreatmentCTA;