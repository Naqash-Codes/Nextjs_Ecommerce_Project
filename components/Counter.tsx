"use client"

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - Date.now()

  if (difference <= 0) {
    return {days: 0, hours: 0, minutes: 0, seconds: 0}
  } 

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

export default function CountdownTimer({
  targetDate,
} : {
  targetDate: Date;
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-3">
      <TimeBox label="Days" value={timeLeft.days} />
      <div className="mt-5 text-xl font-bold text-primary">:</div>
      <TimeBox label="Hours" value={timeLeft.hours} />
      <div className="mt-5 text-xl font-bold text-primary">:</div>
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <div className="mt-5 text-xl font-bold text-primary">:</div>
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  )
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text- text-gray-500">{label}</span>
      <span className="text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </span>
    </div>
  );
}