import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Header from "../../components/Header/Header";
import FAQsPageHero from "../../components/FAQsPageHero/FAQsPageHero";
import FAQSections from "../../components/FAQSections/FAQSections";
import FAQCTA from "../../components/FAQCTA/FAQCTA";
import Footer from "../../components/Footer/Footer";
import "./FAQs.css";

function FAQs() {
  return (
    <main className="faqs-page">
      <AnnouncementBar />
      <Header />

      <FAQsPageHero />

      <FAQSections />

      <FAQCTA />

      <Footer />
    </main>
  );
}

export default FAQs;