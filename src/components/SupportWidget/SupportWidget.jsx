import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiCheck,
  FiMessageCircle,
  FiSend,
  FiX,
} from "react-icons/fi";
import "./SupportWidget.css";

const AVATAR_URL =
  "https://res.cloudinary.com/zy7u4nqi/image/upload/v1789421693/emstetiques-avatar-512_sqs53z.png";

function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("support-widget-open");

    return () => {
      document.body.classList.remove("support-widget-open");
    };
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);

    /*
      BACKEND CONNECTION WILL GO HERE.

      Example:

      const response = await fetch(
        "https://your-backend-url.com/api/support/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
    */

    // Temporary delay so we can see the sending state.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSending(false);
    setIsSubmitted(true);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  const resetWidget = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "I want to know more",
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="support-widget-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWidget}
          />
        )}
      </AnimatePresence>

      <div className="support-widget">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="support-panel"
              className="support-widget-panel"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="support-widget-close"
                onClick={closeWidget}
                aria-label="Close support chat"
              >
                <FiX />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="support-form"
                    className="support-widget-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="support-widget-header">
                      <img
                        src={AVATAR_URL}
                        alt="Emstetiques representative"
                        className="support-widget-avatar"
                      />

                      <div>
                        <p className="support-widget-eyebrow">
                          We're here to help
                        </p>

                        <h3>Have a question?</h3>
                      </div>
                    </div>

                    <div className="support-widget-welcome">
                      <img
                        src={AVATAR_URL}
                        alt=""
                        className="support-widget-message-avatar"
                      />

                      <div className="support-widget-message">
                        <p>
                          Welcome to Emstetiques! Ask questions, discuss
                          options, we are here to help you. Leave a message
                          and we will get back to you.
                        </p>
                      </div>
                    </div>

                    <form
                      className="support-widget-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="support-widget-field">
                        <label htmlFor="support-name">
                          Name <span>*</span>
                        </label>

                        <input
                          id="support-name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="support-widget-field">
                        <label htmlFor="support-email">
                          Email <span>*</span>
                        </label>

                        <input
                          id="support-email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="support-widget-field">
                        <label htmlFor="support-phone">
                          Phone
                        </label>

                        <input
                          id="support-phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="support-widget-field">
                        <label htmlFor="support-message">
                          Message <span>*</span>
                        </label>

                        <textarea
                          id="support-message"
                          name="message"
                          rows="4"
                          placeholder="How can we help?"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <p className="support-widget-consent">
                        By submitting you agree to receive SMS or e-mails for
                        the provided channel. Rates may apply.
                      </p>

                      <button
                        type="submit"
                        className="support-widget-submit"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <>
                            <span className="support-widget-spinner"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send
                            <FiSend />
                          </>
                        )}
                      </button>
                    </form>

                    <div className="support-widget-powered">
                      Powered by{" "}
                      <span>Emstetiques</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="support-success"
                    className="support-widget-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                  >
                    <div className="support-success-icon">
                      <FiCheck />
                    </div>

                    <h3>Thank You!</h3>

                    <p>
                      One of our representatives will contact you shortly.
                    </p>

                    <button
                      type="button"
                      className="support-success-close"
                      onClick={closeWidget}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      className="support-success-again"
                      onClick={resetWidget}
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          className={`support-widget-trigger ${
            isOpen ? "is-open" : ""
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close support chat" : "Open support chat"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
        >
          {isOpen ? <FiX /> : <FiMessageCircle />}

          {!isOpen && (
            <span className="support-widget-pulse"></span>
          )}
        </motion.button>
      </div>
    </>
  );
}

export default SupportWidget;