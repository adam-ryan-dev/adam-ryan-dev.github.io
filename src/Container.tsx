import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Container({
  id,
  children,
  className = "",
}: ContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const isActive = id ? document.location.hash === `#${id}` : false;
      if (isActive) {
        setShowBorder(true); // show border immediately
        setTimeout(() => setShowBorder(false), 200); // hide after 0.2s
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, [id]);

  return (
    <motion.div
      id={id}
      ref={ref}
      className={`scroll-mt-60 p-5 relative ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: isInView ? 1 : 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AnimatePresence>
        {showBorder && (
          <motion.div
            className="absolute inset-0 border-3 border-gray-200 rounded-2xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0, borderRadius: 0 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>

      {children}
    </motion.div>
  );
}
