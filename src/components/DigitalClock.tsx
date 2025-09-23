import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("es-ES", { hour12: false });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px] rounded-2xl shadow-lg">
        <div className="bg-slate-900 text-white px-10 py-6 rounded-2xl flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-3 tracking-wide uppercase text-slate-300">
            Reloj Digital
          </h2>
          <p className="text-6xl font-mono tracking-widest">{time}</p>
        </div>
      </div>
    </div>
  );
}
