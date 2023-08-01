/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Components
import Rankers from "./Rankers";
import MainUser from "./MainUser";

// stylesheet
import "./dashboard.scss";

// Data
// import { Users } from "./user";

const RankingBlock = ({ rankersList, userDetails }) => {
  const rankRow = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  // Specific Logged in Team data
  const loggedTeamInfo = rankersList.find((user) => user["teamId"] === userDetails.teamId);

  // Scroll Animation
  useEffect(() => {
    rankRow.current.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -150,
        },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 75%",
            // markers: true,
            scrub: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.2,
        }
      );
    });
  }, []);

  return (
    <>
      <div className="md:px-40 px-12 flex flex-col items-center mb-16">
        <h1 className="bg_text">
          C{"  "}T{"  "}F <br /> CHAMPIONSHIP
        </h1>
        {/* -------- Details Of Login Team */}
        <MainUser loggedTeamInfo={loggedTeamInfo} userDetails={userDetails} />

        {/* -------- Ranking Table */}
        <div className="rankTable w-full mt-12">
          {rankersList
            .sort((curr, next) => curr.rank - next.rank)
            .map((user, index) => {
              return (
                <div key={user.rank} className="w-full" ref={(el) => (rankRow.current[index] = el)}>
                  <Rankers user={user} />
                  <div className="horizon"></div>
                  <div className="horizon mt-[8px]"></div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RankingBlock;
