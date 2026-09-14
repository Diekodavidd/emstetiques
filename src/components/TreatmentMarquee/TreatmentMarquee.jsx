
import "./TreatmentMarquee.css";

const treatments = [
  "Anti-wrinkle",
  "Dermal fillers",
  "Lip enhancement",
  "Skin boosters",
  "Polynucleotides",
  "Profhilo",
  "Fat dissolving",
];

function TreatmentSet() {
  return (
    <div className="treatment-marquee-set">
      {treatments.map((treatment, index) => (
        <span key={treatment} className="treatment-marquee-item">
          {treatment}

          {index < treatments.length && (
            <span className="treatment-marquee-separator">·</span>
          )}
        </span>
      ))}
    </div>
  );
}

function TreatmentMarquee() {
  return (
    <div className="treatment-marquee">
      <div className="treatment-marquee-track">
        <TreatmentSet />
        <TreatmentSet />
      </div>
    </div>
  );
}

export default TreatmentMarquee