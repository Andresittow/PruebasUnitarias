import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("es-ES", {
        hour12: false,
      });
      setTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Reloj Digital</h2>
      <p className="text-4xl font-mono">{time}</p>
    </div>
  );
}
