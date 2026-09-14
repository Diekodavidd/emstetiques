import { useState } from "react";
import { motion } from "framer-motion";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    treatment: "Anti-wrinkle injections",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submission logic can be connected to the backend later.
  };

  return (
    <motion.div
      className="enquiry-form-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        delay: 0.1,
        ease: "easeOut",
      }}
    >
      <h3 className="enquiry-form-title">
        Enquiry form
      </h3>

      <form
        className="enquiry-form"
        onSubmit={handleSubmit}
      >
        <label className="enquiry-field">
          <span>Name</span>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </label>

        <label className="enquiry-field">
          <span>Email</span>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
          />
        </label>

        <label className="enquiry-field">
          <span>Treatment of interest</span>

          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          >
            <option>Anti-wrinkle injections</option>
            <option>Dermal fillers</option>
            <option>Lip enhancement</option>
            <option>Skin rejuvenation</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label className="enquiry-field">
          <span>Message</span>

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to achieve?"
          />
        </label>

        <button
          type="submit"
          className="enquiry-submit"
        >
          Request a callback
        </button>
      </form>
    </motion.div>
  );
}

export default EnquiryForm;