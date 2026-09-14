import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import TreatmentMarquee from "../../components/TreatmentMarquee/TreatmentMarquee";
import About from "../../components/About/About";
import Difference from "../../components/Difference/Difference";
import Treatments from "../../components/Treatments/Treatments";
import PriceList from "../../components/PriceList/PriceList";
import FAQ from "../../components/FAQ/FAQ";
import Instagram from "../../components/Instagram/Instagram";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Hero />
      <TreatmentMarquee />
      <About />
      <Difference />
      <Treatments />
      <PriceList />
      <FAQ />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;