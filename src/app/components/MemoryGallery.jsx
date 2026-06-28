"use client";
import { motion } from "framer-motion";

export default function MemoryGallery() {
  // مصفوفة الذكريات المحدثة (7 صور) 🌟
  const memoryCards = [
    { title: "يوم ما صورتي الهدايا كلها ❤️", date: "2026-04-23", img: "/image1.jpeg" },
    { title: "فاكرة الخروجة و الهدية دي 😂", date: "2026-03-24", img: "/image2.jpeg" },
    { title: "اجمل ايد مسكتها في الدنيا ", date: "2026-02-13", img: "/image3.jpeg" },
    { title: "ودي من أكتر الصور اللي بحبها لينا سوا 📸", date: "2026-03-31", img: "/image4.jpeg" },
    
    // الـ 3 صور الجداد اللي زودناهم 👇 (عدل الكلام والتواريخ براحتك)
    { title: "اول شات لينا سوا😍", date: "2025-12-14", img: "/image5.jpeg" },
    { title: "اجمل ورقة اتعملت من نونتي🌹", date: "2026-01-19", img: "/image6.jpeg" },
    { title: "ربنا يديمك في حياتي نعمة لأخر العمر يا رب 💍", date: "2026-02-15", img: "/image7.jpeg" }
  ];

  return (
    <div className="w-full space-y-6">
      {/* عنوان المعرض الرئيسي */}
      <div className="text-center py-2 flex items-center justify-center gap-2">
        <span className="text-xl">✨</span>
        <h3 className="text-[#bd4b5e] font-bold text-base font-sans">معرض ذكرياتنا سوا 📸</h3>
        <span className="text-xl">✨</span>
      </div>

      {/* قائمة الكروت */}
      <div className="space-y-6">
        {memoryCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full bg-white rounded-3xl shadow-lg border border-pink-100 p-4 relative overflow-hidden"
          >
            {/* بادج التاريخ الأنيق */}
            <span className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-gray-400 font-mono text-[10px] font-semibold py-1 px-2.5 rounded-full z-10 shadow-sm border border-pink-50">
              {card.date}
            </span>

            {/* برواز الصور المطور لعرض الأبعاد كاملة */}
            <div className="w-full h-64 bg-pink-50/20 rounded-2xl flex items-center justify-center overflow-hidden border border-pink-50/50">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* تفاصيل الكارت السفلي */}
            <div className="mt-4 flex items-center justify-between px-1">
              <p className="text-gray-700 font-medium text-sm text-right w-full flex items-center justify-end gap-1">
                {card.title}
              </p>
              <span className="text-pink-300 text-sm">💗</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}