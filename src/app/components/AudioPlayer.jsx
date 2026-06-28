"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("بانتظار تفاعل المستخدم لتشغيل الصوت"));
    }
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 z-50">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-pink-100 flex flex-col space-y-2">
        <audio
          ref={audioRef}
          src="/bg-music.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          loop
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className={`w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg border border-pink-200 shadow-inner ${isPlaying ? 'animate-spin [animation-duration:6s]' : ''}`}>
              🥰
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-gray-700">وأنت معايا ‏😍‏</p>
              <p className="text-[10px] text-gray-400">عمرو دياب</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <button className="text-gray-400 hover:text-[#bd4b5e] transition"><SkipBack size={16} /></button>
            <button onClick={togglePlay} className="w-8 h-8 rounded-full bg-[#bd4b5e] text-white flex items-center justify-center shadow-md hover:bg-[#a33d4e] transition active:scale-95">
              {isPlaying ? <Pause size={14} fill="white" /> : <Play size={14} fill="white" className="translate-x-px-" />}
            </button>
            <button className="text-gray-400 hover:text-[#bd4b5e] transition"><SkipForward size={16} /></button>
          </div>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse text-[10px] text-gray-400 font-mono">
          <span>{formatTime(currentTime)}</span>
          <input type="range" min="0" max={duration || 100} value={currentTime} onChange={handleProgressChange} className="w-full accent-[#bd4b5e] h-1 bg-pink-100 rounded-lg appearance-none cursor-pointer" />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}