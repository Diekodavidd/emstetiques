import { motion } from "framer-motion";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";


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
          src="https://res.cloudinary.com/zy7u4nqi/image/upload/v1789407932/emstetiques-wordmark-tagline-light_upettj.png" alt="logo" />

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
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
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
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
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
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <h4>Contact</h4>

          <div className="footer-links">
            <a href="mailto:hello@emstetiques.co.uk">
              hello@emstetiques.co.uk
            </a>
            <NavLink to="/contact">Instagram</NavLink>
            <NavLink to="/contact">WhatsApp</NavLink>
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