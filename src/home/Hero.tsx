import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const iconCards = [
  "/arch.png",
  "/python.png",
  "/node.png",
  "/react.png",
  "/rust.png",
];
const words = ["Strony", "Aplikacje", "Systemy", "Programy", "Blockchain"];

export default function Hero() {
  const [cards, setCards] = useState(iconCards);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
      setCards((prevCards) => {
        const newCards = [...prevCards]; // copy the array
        newCards.unshift(newCards.pop()!); // rotate
        return newCards; // return new array
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-screen flex flex-col items-center gap-5">
      <div className="relative h-45 w-30">
        {cards.map((card, i) => (
          <motion.img
            key={card}
            animate={{
              y: i * 20,
              z: i,
              scale: 1 - (cards.length - 1 - i) * 0.1,
              opacity: i === 0 || i === cards.length - 1 ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            src={card}
            className="absolute bg-gray-200/60 backdrop-blur-lg rounded-4xl p-4 shadow-lg"
          />
        ))}
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold flex flex-row items-center justify-between -translate-x-1/2 mr-3">
        Tworzę{" "}
        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1/2 left-0 text-indigo-600 text-nowrap -translate-y-1/2 ml-3"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </h1>

      <p className="text-gray-500 text-lg font-semibold">
        Twój pomysł, moja pasja.
      </p>
      <button onClick={() => document.location.href = "#about"}>Dowiedz się więcej</button>
    </div>
  );
}
