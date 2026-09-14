import { motion } from "framer-motion";

import BrandCurve from "../BrandCurve/BrandCurve";
import PriceItem from "./PriceItem";
import { Link, NavLink } from "react-router-dom";

import prices from "../../data/prices";

import "./PriceList.css";

function PriceList() {
  return (
    <section id="prices" className="price-list-section">
      <div className="price-list-container">
        <motion.div
          className="price-list-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="price-list-eyebrow">
            Transparent pricing
          </p>

          <h2 className="price-list-title">
            Price <em>list</em>
          </h2>

          <BrandCurve className="brand-curve-light" />
        </motion.div>

        <motion.div
          className="price-list-items"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          {prices.map((price) => (
            <PriceItem
              key={price.name}
              price={price}
            />
          ))}

          <NavLink to="/pricelist"
            className="price-price-link"
          >
            See full Price list
          </NavLink>
        </motion.div>

        <p className="price-list-note">
          Consultations are complimentary and redeemable against treatment.
          Prices are indicative — your final plan is confirmed in clinic.
        </p>
      </div>
    </section>
  );
}

export default PriceList;