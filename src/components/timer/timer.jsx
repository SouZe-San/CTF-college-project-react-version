import { useEffect, useState } from "react";
import "./timerSection.scss";
const ContestCountdown = () => {
  // Remove all this thing 5 - 15
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  const tomorrowDate = `${year}-${month}-${day}`;
  const contestEndDate = new Date(tomorrowDate);

  // const contestEndDate = new Date("2023-08-31"); // Replace this with your contest end date

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
  console.log("Hi re-render");

  return (
    <div className="countdown">
      <h2 className="timerTitle monumentFontStyle">Contest Starts In</h2>
      <div className="timer">
        <div className="time-box">
          <span className="time">
            {remainingTime.days}
            <span>d </span>:
          </span>
        </div>
        <div className="time-box">
          <span className="time">
            {" "}
            {remainingTime.hours}
            <span>h </span>:{" "}
          </span>
        </div>
        <div className="time-box">
          <span className="time">
            {remainingTime.minutes}
            <span>m</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContestCountdown;
