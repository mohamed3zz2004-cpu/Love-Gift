"use client";
import { useState } from "react";
import MainContent from "./components/MainContent"; // الاستيراد الصحيح المظبوط 🌟

export default function Home() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const secretWord = "love";

  const handleUnlock = () => {
    if (password.toLowerCase() === secretWord) {
      setIsUnlocked(true);
    } else {
      alert("كلمة السر غير صحيحة! ❌");
    }
  };

  // لو كتبت كلمة السر صح، هيفتح لها صفحة العداد والمعرض فوراً
  if (isUnlocked) {
    return <MainContent />;
  }

  // واجهة قفل الجواب الأنيقة (صفحة الدخول)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef8f5] px-4 select-none">
      
      {/* كارت الجواب العلوي */}
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-pink-100 p-6 mb-8 text-center relative overflow-hidden">
        <div className="border-2 border-dashed border-pink-200 rounded-2xl p-8 bg-white/80 backdrop-blur-sm">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-1 font-mono">Love</p>
          <h1 className="text-xl font-bold text-gray-700 flex items-center justify-center gap-1 font-sans">
            my everything ❤️
          </h1>
        </div>
      </div>

      {/* صندوق إدخال كلمة السر والزرار */}
      <div className="w-full max-w-xs flex flex-col items-center space-y-4">
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase font-mono">
          ENTER THE SECRET WORD
        </p>
        <input
          type="password"
          placeholder="• password •"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUnlock()} // يفتح لو داس Enter من الكيبورد
          className="w-full bg-white border border-pink-100 rounded-full py-3 px-6 text-center text-gray-700 placeholder-gray-300 focus:outline-none focus:border-pink-300 shadow-sm transition-all text-sm font-mono"
        />
        <button
          onClick={handleUnlock}
          className="w-full bg-[#bd4b5e] hover:bg-[#a63f50] text-white font-medium py-3 px-6 rounded-full shadow-md transition-all active:scale-95 text-xs flex items-center justify-center gap-1"
        >
          Unlock 🔓💕
        </button>
      </div>

    </div>
  );
}