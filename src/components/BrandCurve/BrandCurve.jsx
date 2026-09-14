import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import "./BrandCurve.css";

function BrandCurve({ className = "" }) {
  const [isMobile, setIsMobile] = useState(false);
  const id = useId();
  const clipId = `brand-curve-clip-${id.replace(/:/g, "")}`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767.98px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={`brand-curve ${className}`.trim()} aria-hidden="true">
      {isMobile ? (
        /* =========================
           MOBILE / IOS VERSION
           ========================= */
        <svg
          className="brand-curve-mobile"
          viewBox="0 0 320 75"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path
            className="brand-curve-main"
            d="M8 10 C58 27 112 38 170 39 C208 40 240 35 267 21"
          />

          <path
            className="brand-curve-lash"
            d="M238 29 C248 36 257 46 260 58"
          />

          <path
            className="brand-curve-lash"
            d="M257 24 C269 31 280 42 286 52"
          />

          <path
            className="brand-curve-lash"
            d="M280 16 C293 21 304 28 312 37"
          />
        </svg>
      ) : (
        /* =========================
           DESKTOP / LAPTOP VERSION
           ========================= */
        <svg
          className="brand-curve-desktop"
          viewBox="0 0 320 75"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <defs>
            <clipPath id={clipId}>
<rect x="0" y="0" width="267" height="75" />
            </clipPath>
          </defs>

         <motion.path
  className="brand-curve-main"
  d="M8 10
      C58 27 112 38 170 39
      C208 40 240 35 267 21"           clipPath={`url(#${clipId})`}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            transition={{
              pathLength: {
                duration: 1.4,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.3,
              },
            }}
          />

          <motion.path
            className="brand-curve-lash"
            d="M238 29 C248 36 257 46 260 58"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            transition={{
              pathLength: {
                duration: 0.55,
                delay: 0.9,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.2,
                delay: 0.9,
              },
            }}
          />

          <motion.path
            className="brand-curve-lash"
            d="M257 24 C269 31 280 42 286 52"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            transition={{
              pathLength: {
                duration: 0.55,
                delay: 1.05,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.2,
                delay: 1.05,
              },
            }}
          />

          <motion.path
            className="brand-curve-lash"
            d="M280 16 C293 21 304 28 312 37"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            transition={{
              pathLength: {
                duration: 0.5,
                delay: 1.2,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.2,
                delay: 1.2,
              },
            }}
          />
        </svg>
      )}
    </div>
  );
}

export default BrandCurve;