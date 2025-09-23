import React, { useState, useRef } from 'react';

const CountdownTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSeconds(isNaN(value) ? 0 : value);
    setTimeLeft(isNaN(value) ? 0 : value);
  };

  const startCountdown = () => {
    if (running || timeLeft <= 0) return;
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <input
        type="number"
        min={0}
        value={seconds}
        onChange={handleInputChange}
        disabled={running}
        aria-label="input-seconds"
      />
      <button
        onClick={startCountdown}
        disabled={running || timeLeft <= 0}
      >
        Iniciar
      </button>
      <div data-testid="timer-value">{timeLeft}</div>
    </div>
  );
};

export default CountdownTimer;
