import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import headerLogo from "./emstetiques-header-dark.png";
import avatar from "./emstetiques-avatar-512.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="em-header">
      <div className="em-header-inner">

        {/* Full Brand Logo */}
        <a href="#top" className="em-logo">
          <img
            src={headerLogo}
            alt="Emstetiques"
          />
        </a>

        {/* Center Navigation / E */}
        <div
          className={`em-navigation-area ${
            menuOpen ? "menu-open" : ""
          }`}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >

          {/* E Trigger */}
          <button
            type="button"
            className="em-e-trigger"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <img
              src={avatar}
              alt=""
            />
          </button>

          {/* Navigation */}
          <nav
            className={`em-nav ${
              menuOpen ? "em-nav-visible" : ""
            }`}
            aria-label="Main navigation"
          >
           <Link to="/">Home</Link>

<NavLink to="/treatments">
  Treatments
</NavLink>

<NavLink to="/about">
              About
</NavLink>

<NavLink to="/pricelist">
              Price list
</NavLink>

<NavLink to="/faqs">
              FAQs
</NavLink>

{/* <NavLink to="/contact">
              Contact
</NavLink> */}
          </nav>

        </div>

        {/* Book Now */}
      <NavLink to="/contact"
          className="em-nav-book"
        >
          Book now
        </NavLink>

      </div>
    </header>
  );
}

export default Header;