import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import Header from "../../components/Header/Header";
import PricePageHero from "../../components/PricePageHero/PricePageHero";
import PriceGroups from "../../components/PriceGroups/PriceGroups";
import PriceCTA from "../../components/PriceCTA/PriceCTA";
import Footer from "../../components/Footer/Footer";

import "./PriceList.css";

function PriceList() {
  return (
    <main className="price-list-page">
      <AnnouncementBar />
      <Header />

      <PricePageHero />
      <PriceGroups />
      <PriceCTA />

      <Footer />
    </main>
  );
}

export default PriceList;