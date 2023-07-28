/* eslint-disable no-unused-vars */

import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { fetchAllChallenges } from "../../actions/challenges";
const Challenges = () => {
  const dispatch = useDispatch();

  //   const getChallenges = async () => {
  //     console.log("Get all challenge");
  //     const URL = "https://fuku-api-specs.netlify.app/challenges";
  //     try {
  //       const response = await fetch(URL, {
  //         headers: {
  //           //   Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Cookie: "teamId = TNU2730",
  //         },
  //         // credentials: "same-origin",
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleCHaClick = () => {
    dispatch(fetchAllChallenges());
    // getChallenges();
    console.log("clicked");
  };

  const handleClick = () => {
    dispatch(login());
    console.log("AUtH clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleCHaClick}>Challenge Me</button>
    </div>
  );
};

export default Challenges;
