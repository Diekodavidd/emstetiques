import { motion } from "framer-motion";

import EnquiryForm from "./EnquiryForm";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="contact-eyebrow">Find us</p>

          <h2 className="contact-title">
            Book your <em>consultation</em>
          </h2>

          <p className="contact-description">
            Tell us what you'd like to change and we'll tell you honestly
            what's possible. Complimentary, no obligation, 30 minutes.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-label">Address</span>

              <span className="contact-detail-value">
                Clinic address — to confirm
              </span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">Email</span>

              <a
                href="mailto:hello@emstetiques.co.uk"
                className="contact-detail-value"
              >
                hello@emstetiques.co.uk
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">WhatsApp</span>

              <a
                href="#contact"
                className="contact-detail-value"
              >
                Message the clinic
              </a>
            </div>
          </div>

          <div className="contact-map">
            <span>Map embed — clinic location</span>
          </div>
        </motion.div>

        <EnquiryForm />
      </div>
    </section>
  );
}

export default Contact;