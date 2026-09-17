import { motion } from "framer-motion";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://res.cloudinary.com/zy7u4nqi/image/upload/v1789407932/emstetiques-wordmark-tagline-light_upettj.png"
            alt="Emstetiques"
          />

          <p className="footer-description">
            Prescriber-led facial aesthetics with a focus on natural, balanced
            results.
          </p>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: "easeOut",
          }}
        >
          <h4>Important links</h4>

          <div className="footer-links">
            <NavLink to="/contact">Book now</NavLink>
            <NavLink to="/treatments">Treatments</NavLink>
            <NavLink to="/pricelist">Price list</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
          </div>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <h4>Opening hours</h4>

          <div className="footer-hours">
            <span>Mon – Thu · 9am – 6pm</span>
            <span>Fri · 9am – 8pm</span>
            <span>Sat – Sun · 9am – 4pm</span>
          </div>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <h4>Contact</h4>

          <div className="footer-links">
            <a href="mailto:emstetiques@gmail.com">
              emstetiques@gmail.com
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/emstetiques?stkn=czhldDAzb2wza252"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <FaInstagram />
              Instagram
            </a>

            {/* TikTok */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <FaTiktok />
              TikTok
            </a>

            {/* WhatsApp → Contact page for now */}
            <NavLink
              to="/contact"
              className="footer-social-link"
            >
              <FaWhatsapp />
              WhatsApp
            </NavLink>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Emstetiques. All rights reserved.</span>

        <span>
          Terms &amp; Conditions · Refund Policy · Privacy Policy
        </span>
      </div>
    </footer>
  );
}

export default Footer;