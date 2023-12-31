/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../../components/heroSection/herosection";
import ContestCountdown from "../../components/timer/timer";
import Rewards from "../../components/rewards/rewards";
import Topics from "../../components/topics/topics";
import Rules from "../../components/gameRules/rules";
import Footer from "../../components/footer/footer";

const Home = () => {
  const targetDate = new Date("2023-12-31T00:00:00");
  return (
    <div className="main">
      <HeroSection/>
      <ContestCountdown/>
      <Rewards/>
      <Topics/>
      <Rules/>
      <Footer/>
    </div>
  );
};

export default Home;
