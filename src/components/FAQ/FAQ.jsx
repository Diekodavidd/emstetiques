import { useState } from "react";
import { motion } from "framer-motion";

import BrandCurve from "../BrandCurve/BrandCurve";
import FAQItem from "./FAQItem";

import faqs from "../../data/faqs";

import "./FAQ.css";

function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const handleToggle = (index) => {
    setOpenFaq((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-container">
        <motion.div
          className="faq-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="faq-eyebrow">
            Good to know
          </p>

          <h2 className="faq-title">
            Frequently <em>asked</em>
          </h2>

          <BrandCurve />

          <p className="faq-description">
            Still unsure about something? Message the clinic directly —
            you'll speak to your prescriber, not a call centre.
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openFaq === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;