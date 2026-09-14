import { useState } from "react";
import { motion } from "framer-motion";

import FAQSection from "./FAQSection";
import faqSections from "../../data/faqSections";

import "./FAQSections.css";

function FAQSections() {
  const [openFAQ, setOpenFAQ] = useState("0-0");

  const handleToggle = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;

    setOpenFAQ((current) => (current === key ? "" : key));
  };

  return (
    <section className="faq-sections">
      <div className="faq-sections-container">
        {faqSections.map((section, sectionIndex) => (
          <motion.div
            className="faq-category"
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: sectionIndex * 0.08,
              ease: "easeOut",
            }}
          >
            <h2 className="faq-category-title">
              {section.title}
            </h2>

            <p className="faq-category-note">
              {section.note}
            </p>

            <div className="faq-items">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;

                return (
                  <FAQSection
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openFAQ === key}
                    onToggle={() =>
                      handleToggle(sectionIndex, itemIndex)
                    }
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQSections;