import  { useEffect, useState } from "react";
import "./timerSection.scss"
const ContestCountdown = () => {
  const contestEndDate = new Date("2023-08-31"); // Replace this with your contest end date

  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const remainingTime = contestEndDate.getTime() - currentTime;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);
  console.log("Hi re-render")

  return (
    <div className="countdown">
      <h2 className="timerTitle monumentFontStyle">Contest Starts In</h2>
      <div className="timer">
        <div className="time-box">
          <span className="time">{remainingTime.days} :</span>
          <span className="unit">Days</span>
        </div>
        <div className="time-box">
          <span className="time"> {remainingTime.hours} :</span>
          <span className="unit">Hours</span>
        </div>
        <div className="time-box">
          <span className="time">{remainingTime.minutes}</span>
          <span className="unit">Minutes</span>
        </div>

      </div>
    </div>
  );
};

export default ContestCountdown;
