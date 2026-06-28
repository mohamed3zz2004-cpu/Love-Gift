"use client";
import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import MessageSlider from "./MessageSlider";
import MemoryGallery from "./MemoryGallery";

export default function MainContent() {
  const startDate = new Date("2025-12-14T00:00:00");
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();
      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / (1000 * 60)) % 60);
        const s = Math.floor((difference / 1000) % 60);
        setTimeElapsed({ days: d, hours: h, minutes: m, seconds: s });
      }
    };
    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFinished = () => {
    setShowGallery(true);
    setTimeout(() => {
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#fef8f5] text-gray-800 flex flex-col items-center justify-start py-12 px-4 overflow-y-auto select-none pb-32">
      
      {/* 1. كارت العداد */}
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-100 text-center mb-6">
        <h2 className="text-[#bd4b5e] font-bold text-lg mb-1 flex items-center justify-center gap-1">💕 بدايتنا سوا 💕</h2>
        <p className="text-xs text-gray-400 mb-6 font-mono tracking-wider">14 . 12 . 2025</p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-pink-50/40 p-3 rounded-2xl flex flex-col items-center border border-pink-100/50">
            <span className="text-2xl font-bold text-[#bd4b5e] font-mono">{String(timeElapsed.days).padStart(2, "0")}</span>
            <span className="text-[11px] text-gray-500 font-medium mt-1">يوم</span>
          </div>
          <div className="bg-pink-50/40 p-3 rounded-2xl flex flex-col items-center border border-pink-100/50">
            <span className="text-2xl font-bold text-[#bd4b5e] font-mono">{String(timeElapsed.hours).padStart(2, "0")}</span>
            <span className="text-[11px] text-gray-500 font-medium mt-1">ساعة</span>
          </div>
          <div className="bg-pink-50/40 p-3 rounded-2xl flex flex-col items-center border border-pink-100/50">
            <span className="text-2xl font-bold text-[#bd4b5e] font-mono">{String(timeElapsed.minutes).padStart(2, "0")}</span>
            <span className="text-[11px] text-gray-500 font-medium mt-1">دقيقة</span>
          </div>
          <div className="bg-pink-50/40 p-3 rounded-2xl flex flex-col items-center border border-pink-100/50">
            <span className="text-2xl font-bold text-[#bd4b5e] font-mono">{String(timeElapsed.seconds).padStart(2, "0")}</span>
            <span className="text-[11px] text-gray-500 font-medium mt-1">ثانية</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 font-medium italic mt-4">كل ثانية بتعدي وأنتِ في قلبي ❤️</p>
      </div>

      {/* 2. السلايدر */}
      <MessageSlider onFinished={handleFinished} />

      {/* 3. المعرض */}
      {showGallery && (
        <div id="gallery" className="w-full max-w-sm pt-4">
          <MemoryGallery />
        </div>
      )}

      {/* مشغل الصوت */}
      <AudioPlayer />
    </div>
  );
}