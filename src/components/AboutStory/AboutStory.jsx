import { motion } from "framer-motion";
import BrandCurve from "../BrandCurve/BrandCurve";
import "./AboutStory.css";

function AboutStory() {
  return (
    <section className="about-story">
      <motion.div
        className="about-story-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="about-story-eyebrow">Our story</p>

        <h2 className="about-story-title">
          Aesthetic care that starts with{" "}
          <em>clinical judgement</em>
        </h2>

        <BrandCurve />

        <div className="about-story-copy">
          <p>
            Emstetiques began with a simple conviction: injectables are
            medicine, and they should be delivered by someone qualified to
            prescribe them. As a registered pharmacist independent prescriber,
            every consultation, prescription and treatment here is handled by
            the same clinician — no remote prescriber signing off a face
            they've never seen.
          </p>

          <p>
            Founded on the belief that ageing should be a natural and graceful
            process, the clinic is a space where clients of all ages feel able
            to embrace how they look. We offer medically backed treatments —
            anti-ageing injectables, advanced skin therapies and regenerative
            options — always sourced through licensed pharmacy channels and
            fully traceable.
          </p>

          <p>
            The approach to every treatment is bespoke and conservative:
            natural, radiant results that refresh rather than change you. If a
            treatment isn't right for you, we'll say so.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutStory;