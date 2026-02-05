"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// 🔹 MOVE THIS OUTSIDE (important!)
const SALE_END_DATE = new Date("2026-02-10T00:00:00");

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const SaleCountDownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(SALE_END_DATE));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(SALE_END_DATE));
    }, 1000);

    return () => clearInterval(interval);
  }, []); // ✅ EMPTY dependency array

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4">
      <TimeCircle label="Days" value={timeLeft.days} />
      <TimeCircle label="Hours" value={timeLeft.hours} />
      <TimeCircle label="Minutes" value={timeLeft.minutes} />
      <TimeCircle label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};

function TimeCircle({ label, value }: { label: string; value: number }) {
  return (
    <div className="w-18 h-18 bg-white rounded-full flex flex-col items-center justify-center shadow-md">
      <span className="text-xl font-bold text-black leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs text-black mt-1 leading-none">
        {label}
      </span>
    </div>
  );
}

export default SaleCountDownTimer;
