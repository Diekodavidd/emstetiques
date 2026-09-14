import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import "./NewsletterPopup.css";

function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("em-newsletter-seen");

    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("em-newsletter-seen", "true");
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Newsletter subscription:", formData);

    setIsOpen(false);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="newsletter-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            className="newsletter-popup"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="newsletter-close"
              onClick={closePopup}
              aria-label="Close subscription popup"
            >
              <FiX />
            </button>

            <div className="newsletter-content">
              <p className="newsletter-eyebrow">
                Stay in the loop
              </p>

              <h2>
                Satisfying your skin’s quest,
                <em> one tip at a time.</em>
              </h2>

              <p className="newsletter-description">
                Sign up for exclusive offers, deals, and tips from
                Emstetiques.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="newsletter-field">
                  <label htmlFor="newsletter-name">
                    Name <span>*</span>
                  </label>

                  <input
                    id="newsletter-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="newsletter-field">
                  <label htmlFor="newsletter-email">
                    Email <span>*</span>
                  </label>

                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="newsletter-field">
                  <label htmlFor="newsletter-phone">
                    Phone
                  </label>

                  <input
                    id="newsletter-phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="newsletter-submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NewsletterPopup;