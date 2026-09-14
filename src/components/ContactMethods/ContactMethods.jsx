import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./ContactMethods.css";

const contactMethods = [
  {
    title: "Book online",
    description: "Live availability, instant confirmation",
    href: "#book",
  },
  {
    title: "WhatsApp",
    description: "Quick questions, usually answered same day",
    href: "#book",
  },
  {
    title: "Email",
    description: "hello@emstetiques.co.uk",
    href: "#book",
  },
];

function ContactMethods() {
  return (
    <div className="contact-methods">
      {contactMethods.map((method, index) => (
        <motion.a
          key={method.title}
          href={method.href}
          className="contact-method-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: "easeOut",
          }}
        >
          <span className="contact-method-content">
            <span className="contact-method-title">
              {method.title}
            </span>

            <span className="contact-method-description">
              {method.description}
            </span>
          </span>

          <FiArrowUpRight className="contact-method-icon" aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}

export default ContactMethods;