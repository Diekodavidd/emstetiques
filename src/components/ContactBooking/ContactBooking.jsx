import { motion } from "framer-motion";
import ContactMethods from "../ContactMethods/ContactMethods";
import ContactMap from "../ContactMap/ContactMap";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./ContactBooking.css";

function ContactBooking() {
  return (
    <section id="book" className="contact-booking">
      <div className="contact-booking-container">
        {/* Left column */}
        <motion.div
          className="contact-booking-info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h2 className="contact-booking-title">
            Three ways to <em>reach us</em>
          </h2>

          <ContactMethods />

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-label">
                Address
              </span>

              <span className="contact-detail-value">
                Clinic address — to confirm
              </span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">
                Parking
              </span>

              <span className="contact-detail-value">
                Street parking available nearby
              </span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">
                Hours
              </span>

              <span className="contact-detail-value">
                Mon–Thu 9–6 · Fri 9–8 · Sat–Sun 9–4
              </span>
            </div>
          </div>

          <ContactMap />
        </motion.div>

        {/* Right column */}
        <AppointmentForm />
      </div>
    </section>
  );
}

export default ContactBooking;