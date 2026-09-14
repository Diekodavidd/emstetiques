import { motion } from "framer-motion";
import "./TreatmentSection.css";
import BrandCurve from "../BrandCurve/BrandCurve";
function TreatmentSection({
  treatment,
  reverse = false,
  showCurve = false,
}) {  return (
    <section
      id={treatment.id}
      className={`treatment-section ${
        reverse ? "treatment-section-reverse" : ""
      }`}
    >
      <div className="treatment-section-container">
        {/* Image */}
       <motion.div
  className={`treatment-image treatment-image-${treatment.imageVariant}`}
  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {treatment.avatar && (
    <img
      src={treatment.avatar}
      alt={treatment.imageLabel}
    />
  )}
</motion.div>

        {/* Content */}
        <motion.div
          className="treatment-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <p className="treatment-category">{treatment.category}</p>

<h2 className="treatment-title">
  {treatment.title.split(treatment.titleAccent)[0]}
  <em>{treatment.titleAccent}</em>
</h2>

{showCurve && <BrandCurve />}
          <p className="treatment-description">
            {treatment.description}
          </p>

          <div className="treatment-points">
            {treatment.points.map((point) => (
              <div className="treatment-point" key={point.label}>
                <span className="treatment-point-dot"></span>

                <span>
                  <strong>{point.label}</strong>{" "}
                  <span className="treatment-point-text">
                    {point.text}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <a href="https://www.fresha.com/a/fx-aesthetics-uk-london-22-new-broadway-asqy9zb4/booking?menu=true&pId=2542521&cartId=dda8eb53-bf0d-4765-b171-2dd62170be93" className="treatment-book-button">
            {treatment.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default TreatmentSection;