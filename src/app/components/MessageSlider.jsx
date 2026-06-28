"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MessageSlider({ onFinished }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    "كل ثانية بتعدي وأنتي معايا بكتشف إني بحبك أكتر من الأول.. ❤️",
    "حبيت أعملك الهدية المتواضعة دي عشان تفضل دايماً فكرانا وتفرح قلبك الصافي 🌹",
    "وربنا يخليكي ليا يا قلبي.. ويلا بقا انبهري باللي جاي 😂👇"
  ];

  const handleNext = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-pink-100 p-6 min-h-45 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-3 left-4 text-2xl opacity-20">🌹</div>

      <div className="grow flex items-center justify-center text-center py-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-gray-700 font-medium text-base leading-relaxed"
          >
            {messages[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-4 border-t border-pink-50 pt-3">
        <div className="flex space-x-1.5 flex-row-reverse">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 bg-[#bd4b5e]" : "w-1.5 bg-pink-100"
              }`}
            />
          ))}
        </div>

        {currentIndex < messages.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-pink-50 hover:bg-pink-100 text-[#bd4b5e] text-xs font-semibold py-2 px-4 rounded-full transition-all active:scale-95 flex items-center gap-1"
          >
            التالي <ArrowRight size={14} />
          </button>
        ) : (
          <button
            onClick={onFinished}
            className="bg-[#bd4b5e] hover:bg-[#a63f50] text-white text-xs font-semibold py-2 px-5 rounded-full shadow-sm transition-all active:scale-95 flex items-center gap-1 animate-bounce"
          >
            انبهري بقا ✨ <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}