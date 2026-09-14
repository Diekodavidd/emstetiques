import { motion } from "framer-motion";
import BrandCurve from "../BrandCurve/BrandCurve";
import AboutInstagramCard from "./AboutInstagramCard";
import "./AboutInstagram.css";

function AboutInstagram() {
  const posts = [
    "IG post 01",
    "IG post 02",
    "IG post 03",
  ];

  return (
    <section className="about-instagram">
      <div className="about-instagram-container">
        <motion.div
          className="about-instagram-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about-instagram-title-wrap">
            <h2 className="about-instagram-title">
              <em>Follow</em> @emstetiques
            </h2>

            <BrandCurve />
          </div>

          <p className="about-instagram-meta">
            Results · Reels · Offers
          </p>
        </motion.div>

        <div className="about-instagram-grid">
          {posts.map((post, index) => (
            <AboutInstagramCard
              key={post}
              label={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutInstagram;