import { useEffect, useState } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [session, setSession] = useState("AM");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const hrs = time.getHours();
    if (hrs >= 12) {
      setSession("PM");
    } else {
      setSession("AM");
    }
  }, [time]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="container">
      <span id="hours">{hours < 10 ? `0${hours}` : hours}</span>
      <span>:</span>
      <span id="minutes">{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span>:</span>
      <span id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
      <span id="session">{session}</span>
    </div>
  );
}

export default DigitalClock;
