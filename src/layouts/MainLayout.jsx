import { Outlet } from "react-router-dom";
import NewsletterPopup from "../components/NewsletterPopup/NewsletterPopup";
import SupportWidget from "../components/SupportWidget/SupportWidget";


 function MainLayout() {
  return (
    <div className="emstetiques-app">
      <Outlet />

      <NewsletterPopup />
      <SupportWidget />
    </div>
  );
}

export default MainLayout;