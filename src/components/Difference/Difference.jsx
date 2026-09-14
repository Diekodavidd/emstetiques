import { motion } from "framer-motion";
import BrandCurve from "../BrandCurve/BrandCurve";

import "./Difference.css";

const differences = [
  {
    title: "Full consultation",
    copy:
      "Facial assessment, medical history and honest advice — including when the answer is no treatment at all.",
    color: "#F6C9CE",
  },
  {
    title: "Premium products",
    copy:
      "Pharmacy-sourced, fully traceable products prescribed and administered by the same clinician.",
    color: "#E3A2AB",
  },
  {
    title: "Discreet setting",
    copy:
      "A calm, private clinic room with unhurried appointments and no pressure to upsell.",
    color: "#C4707F",
  },
  {
    title: "Aftercare that lasts",
    copy:
      "A two-week review on every treatment, plus direct access to your prescriber in between.",
    color: "#A8123F",
  },
];

function Difference() {
  return (
    <section className="difference-section">
      <div className="difference-container">
        <motion.div
          className="difference-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="difference-eyebrow">The difference</p>

          <h2 className="difference-title">
            <em>What makes</em> Emstetiques different
          </h2>

          <BrandCurve />

          <p className="difference-description">
            We don't just offer treatments — we offer a personalised
            experience grounded in care, clinical excellence and results that
            speak for themselves. From the moment you arrive, every detail is
            designed to give you confidence in your journey and comfort in our
            expertise.
          </p>
        </motion.div>

        <div className="difference-grid">
          {differences.map((difference, index) => (
            <motion.div
              className="difference-card"
              key={difference.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <div
                className="difference-dot"
                style={{ background: difference.color }}
              />

              <h3>{difference.title}</h3>

              <p>{difference.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Difference;