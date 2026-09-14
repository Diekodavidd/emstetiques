import { motion } from "framer-motion";
import "./TreatmentsPageHero.css";

function TreatmentsPageHero() {
  const treatmentLinks = [
    { label: "Anti-wrinkle", href: "#anti-wrinkle" },
    { label: "Dermal fillers", href: "#fillers" },
    { label: "Skin boosters", href: "#skin-boosters" },
    { label: "Polynucleotides", href: "#polynucleotides" },
    { label: "Fat dissolving", href: "#fat-dissolving" },
    { label: "PRP & PRF", href: "#prp" },
    { label: "Botox", href: "#botox" },
  ];

  return (
    <section className="treatments-page-hero">
      <motion.div
        className="treatments-page-hero-container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="treatments-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Treatments</span>
        </div>

        <h1 className="treatments-page-title">
          Our <em>treatments</em>
        </h1>

        <p className="treatments-page-description">
          Every treatment begins with a consultation and a prescription
          written by the same clinician who treats you. Below is the full
          menu, what each is best for, and what to expect.
        </p>

        <div className="treatments-page-links">
          {treatmentLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="treatments-page-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TreatmentsPageHero;