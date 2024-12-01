import { useState, useRef } from 'react';

export const useTimer = (maxTime: number = 20) => {
  const [time, setTime] = useState<number>(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setTime(maxTime);
    interval.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const clearTimer = () => clearInterval(interval.current);

  return { time, startTimer, clearTimer };
};
