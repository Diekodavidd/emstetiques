
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function TreatmentCard({ treatment }) {
  return (
    <motion.div
      
      className="treatment-card"
      whileHover={{
        y: -6,
        boxShadow: "0 24px 48px rgba(92,16,39,0.14)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
         <NavLink to="/treatments">
     <div className="treatment-card-image">
  <img
    src={treatment.avatar}
    alt={treatment.name}
  />

  {/* <span className="treatment-card-label">
    {treatment.slot}
  </span> */}
</div>

      <div className="treatment-card-content">
        <h3>{treatment.name}</h3>

        <p>{treatment.copy}</p>

        <div className="treatment-card-price">
          {treatment.from}
        </div>
      </div>
                </NavLink>

    </motion.div>
  );
}

export default TreatmentCard;

