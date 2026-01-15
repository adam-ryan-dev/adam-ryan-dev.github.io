import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Bar() {
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsAtTop(latest === 0);
    });
  }, [scrollY]);

  return (
    <div>
      <div className="flex flex-col items-center w-screen fixed left-0 top-0 text-nowrap z-10">
        <motion.div
          initial={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 0,
            marginBottom: 50,
          }}
          animate={
            isAtTop
              ? {
                  // Styles when at top
                  position: "static",
                  top: 0,
                  left: 0,
                  width: "100%",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  marginTop: 0,
                  marginBottom: 50,
                }
              : {
                  position: "block",
                  width: window.innerWidth < 640 ? "95%" : "50%",
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  marginTop: 20,
                  marginBottom: 20,
                }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-200/50 shadow-xs shadow-gray-500/10 backdrop-blur-sm border-gray-300 flex flex-row items-center justify-between px-10 py-5 gap-20"
        >
          <div className="flex items-center gap-3">
            <a href="/" className="font-semibold">
              Adam Ryan
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#projects" className="hover:underline">
              Projekty
            </a>
            <a href="#contact" className="hover:underline">
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mb-30" />
    </div>
  );
}
