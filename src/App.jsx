import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import Treatments from "./pages/Treatments/Treatments";
import About from "./pages/About/About";
import PriceList from "./pages/PriceList/PriceList";
import FAQs from "./pages/FAQs/FAQs";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;