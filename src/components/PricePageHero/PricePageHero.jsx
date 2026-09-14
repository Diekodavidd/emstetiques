import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BrandCurve from "../BrandCurve/BrandCurve";

import "./PricePageHero.css";

function PricePageHero() {
  return (
    <section className="price-page-hero">
      <motion.div
        className="price-page-hero-container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="price-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Price list</span>
        </div>

        <h1 className="price-page-title">
          Price <em>list</em>
        </h1>

        <BrandCurve />

        <p className="price-page-description">
          Consultations are complimentary and redeemable against treatment.
          Prices below are per session unless stated; your final plan is
          confirmed in clinic.
        </p>
      </motion.div>
    </section>
  );
}

export default PricePageHero;