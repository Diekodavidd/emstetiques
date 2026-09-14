import { useState } from "react";
import { motion } from "framer-motion";
import "./AppointmentForm.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  treatment: "Anti-wrinkle injections",
  preferredTime: "",
  message: "",
};

const treatmentOptions = [
  "Anti-wrinkle injections",
  "Dermal fillers",
  "Lip enhancement",
  "Skin boosters",
  "Polynucleotides",
  "Fat dissolving",
  "PRP / PRF",
  "Not sure yet",
];

function AppointmentForm() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form submission will be connected to the backend later.
    console.log("Appointment request:", formData);
  };

  return (
    <motion.div
      className="appointment-form-card"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h3 className="appointment-form-title">
        Request an appointment
      </h3>

      <p className="appointment-form-intro">
        We'll come back to you with availability within 24 hours.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* Name */}
        <label className="appointment-field">
          <span className="appointment-field-label">
            Name
          </span>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </label>

        {/* Email + Phone */}
        <div className="appointment-field-row">
          <label className="appointment-field">
            <span className="appointment-field-label">
              Email
            </span>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
            />
          </label>

          <label className="appointment-field">
            <span className="appointment-field-label">
              Phone
            </span>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="07…"
              required
            />
          </label>
        </div>

        {/* Treatment */}
        <label className="appointment-field">
          <span className="appointment-field-label">
            Treatment of interest
          </span>

          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          >
            {treatmentOptions.map((treatment) => (
              <option key={treatment} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </label>

        {/* Preferred days / times */}
        <label className="appointment-field">
          <span className="appointment-field-label">
            Preferred days / times
          </span>

          <input
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="e.g. weekday evenings"
          />
        </label>

        {/* Message */}
        <label className="appointment-field">
          <span className="appointment-field-label">
            Message
          </span>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="What would you like to achieve?"
          />
        </label>

        <button
          type="submit"
          className="appointment-submit"
        >
          Send request
        </button>

        <p className="appointment-form-notice">
          By sending you agree to be contacted about your enquiry.
          We never share your details.
        </p>
      </form>
    </motion.div>
  );
}

export default AppointmentForm;