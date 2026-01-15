import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const email = "www.adam.ryan@proton.me";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div className="w-full relative bg-white" ref={ref} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center overflow-hidden py-30 relative"
      >
        {/* grainy texture with blended edges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* gradient mask for smooth edges */}
              <mask id="fadeMask">
                <rect width="100%" height="100%" fill="url(#maskGradient)" />
              </mask>

              <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="10%" stopColor="white" stopOpacity="1" />
                <stop offset="90%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <filter id="grain">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.7"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
              </filter>
            </defs>

            <rect
              width="100%"
              height="100%"
              filter="url(#grain)"
              fill="black"
              opacity="0.5"
              mask="url(#fadeMask)"
            />
          </svg>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800 relative"
        >
          Skontaktuj się ze mną
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg sm:text-xl text-center mb-6 text-gray-700 relative"
        >
          Masz pomysł lub pytanie? Napisz do mnie:
        </motion.p>

        <motion.a
          href={`mailto:${email}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-indigo-600 text-xl sm:text-2xl font-semibold underline hover:text-indigo-400 transition-colors relative"
        >
          {email}
        </motion.a>
        <p className="absolute bottom-0 right-0 p-2 text-gray-500 text-right whitespace-pre-line text-sm">
          © Adam Ryan {new Date().getFullYear()}.{"\n"}
          Logotypy zamieszczone na stronie nie podlegają prawom autorskim.
        </p>
      </motion.div>
    </motion.div>
  );
}
