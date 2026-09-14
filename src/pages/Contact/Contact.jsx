import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Header from "../../components/Header/Header";
import ContactPageHero from "../../components/ContactPageHero/ContactPageHero";
import ContactBooking from "../../components/ContactBooking/ContactBooking";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <AnnouncementBar />

      <Header />

      <ContactPageHero />

      <ContactBooking />

      <Footer />
    </main>
  );
}

export default Contact;