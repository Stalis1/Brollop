'use client'
import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DD HH:mm:ss"
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60)
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <p>Countdown finished!</p>;

  return (
    <div className="flex flex-col items-center">
      <h2>Dagar kvar</h2>
      <p>
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes}
      </p>
    </div>
  );
};
