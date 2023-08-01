// eslint-disable-next-line no-unused-vars
import React from "react";
// import Challenges from "./Challenges";
import { challenges_array } from "../../assets/Json/Allchallenges";
import Challenges from "../../components/Challenges/ChallengeBlock/Challenges";
import NotValid from "../../components/notValid/NotValid";

const page = () => {
  // const challenges_array = null;
  return (
    <div className="md:mx-12  mt-24 pt-16">
      {challenges_array ? <Challenges challenges_array={challenges_array} /> : <NotValid />}
    </div>
  );
};

export default page;
