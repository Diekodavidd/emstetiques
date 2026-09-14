import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Header from "../../components/Header/Header";
import TreatmentsPageHero from "../../components/TreatmentsPageHero/TreatmentsPageHero";
import TreatmentSection from "../../components/TreatmentSection/TreatmentSection";
import TreatmentCTA from "../../components/TreatmentCTA/TreatmentCTA";
import Footer from "../../components/Footer/Footer";

import treatmentDetails from "../../data/treatmentDetails";

import "./Treatments.css";

function Treatments() {
  return (
    <main className="treatments-page">
      <AnnouncementBar />

      <Header />

      <TreatmentsPageHero />

      <div className="treatments-list">
       {treatmentDetails.map((treatment, index) => (
  <TreatmentSection
    key={treatment.id}
    treatment={treatment}
    reverse={index % 2 === 1}
    showCurve={[0, 3, 5].includes(index)}
  />
))}
      </div>

      <TreatmentCTA />

      <Footer />
    </main>
  );
}

export default Treatments;