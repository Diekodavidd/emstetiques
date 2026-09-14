import { motion } from "framer-motion";
import "./BrandCurve.css";

function BrandCurve({ className = "" }) {
  return (
    <div className={`brand-curve ${className}`.trim()} aria-hidden="true">
      <svg
        viewBox="0 0 320 75"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <clipPath id="brand-curve-main-clip">
            <rect
              x="0"
              y="0"
              width="267"
              height="75"
            />
          </clipPath>
        </defs>

        {/* Main curve */}
        <motion.path
          className="brand-curve-main"
          d="
            M8 10
            C58 27 112 38 170 39
            C208 40 240 35 267 21
          "
          clipPath="url(#brand-curve-main-clip)"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
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

        {/* First lash */}
        <motion.path
          className="brand-curve-lash brand-curve-lash-1"
          d="
            M238 29
            C248 36 257 46 260 58
          "
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
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

        {/* Second lash */}
        <motion.path
          className="brand-curve-lash brand-curve-lash-2"
          d="
            M257 24
            C269 31 280 42 286 52
          "
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
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

        {/* Third lash */}
        <motion.path
          className="brand-curve-lash brand-curve-lash-3"
          d="
            M280 16
            C293 21 304 28 312 37
          "
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
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
    </div>
  );
}

export default BrandCurve;