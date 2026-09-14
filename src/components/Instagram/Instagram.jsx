import { motion } from "framer-motion";

import BrandCurve from "../BrandCurve/BrandCurve";
import InstagramCard from "./InstagramCard";

import "./Instagram.css";

const instagramPosts = [
  {
    label: "IG post 01",
    href: "https://www.instagram.com/emstetiques/",
  },
  {
    label: "IG post 02",
    href: "https://www.instagram.com/emstetiques/",
  },
  {
    label: "IG post 03",
    href: "https://www.instagram.com/emstetiques/",
  },
  {
    label: "IG post 04",
    href: "https://www.instagram.com/emstetiques/",
  },
];

function Instagram() {
  return (
    <section className="instagram-section">
      <div className="instagram-container">
        <motion.div
          className="instagram-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="instagram-heading-content">
            <h2 className="instagram-title">
              <em>Follow</em> @emstetiques
            </h2>

            <BrandCurve />
          </div>

          <span className="instagram-meta">
            Results · Reels · Offers
          </span>
        </motion.div>

        <div className="instagram-grid">
          {instagramPosts.map((post, index) => (
            <InstagramCard
              key={post.label}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instagram;