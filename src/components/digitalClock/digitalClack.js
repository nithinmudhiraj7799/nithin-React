import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const dateFormat = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? `0${hours}` : hours;
    console.log(hours, "hours123");

    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div>
      <h3>Digital Clock</h3>
      <h1>{dateFormat()}</h1>
    </div>
  );
}