import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Header from "../../components/Header/Header";
import AboutPageHero from "../../components/AboutPageHero/AboutPageHero";
import AboutStory from "../../components/AboutStory/AboutStory";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import AboutInstagram from "../../components/AboutInstagram/AboutInstagram";
import AboutCTA from "../../components/AboutCTA/AboutCTA";
import Footer from "../../components/Footer/Footer";

import "./About.css";

function About() {
  return (
    <main className="about-page">
      <AnnouncementBar />
      <Header />

      <AboutPageHero />
      <AboutStory />
      <ValuesSection />
      <AboutInstagram />
      <AboutCTA />

      <Footer />
    </main>
  );
}

export default About;