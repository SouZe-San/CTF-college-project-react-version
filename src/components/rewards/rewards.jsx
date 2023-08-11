import "./rewardsstyle.scss";

import rewardsBTS from "../../assets/title-stoked-bg/rewardsTitleBgStoked.svg";
// import gridLines from "../../assets/gallery-images/grid-lines-02.svg"
import winnerSvg001 from "../../assets/gallery-images/Winners_Flatline.svg";
// import winnerSvg002 from "../../assets/gallery-images/Winners_Monochromatic.svg";
// import winnerSvg003 from "../../assets/gallery-images/Winners_Two Color.svg";

const RewardCard = () => {
  return (
    <div className="outerCard">
      <div className="innerCard">
        <div className="header">
          <img
            className="bg-title-stoked"
            src={rewardsBTS}
            alt="competion title svg"
          />
          <h1 className="monumentFontStyle rewardsTitle ">REWARDS</h1>
        </div>
        <div className="container">
          <div className="content">
            <ul>
              <li>Certification for the winners</li>
              <li>Interesting prize pool</li>
              <li>Aknowledgement from the respecteds</li>
            </ul>
          </div>
          <div className="imageSection">
            <img src={winnerSvg001} alt="" />
          </div>
        </div>
        {/* <img src={winnerSvg002} alt="" /> */}
        {/* <img src={winnerSvg003} alt="" /> */}
      </div>
    </div>
  );
};

export default function Rewards() {
  return (
    <div className="rewardsSection" id="RewardsSection">
      <RewardCard />
    </div>
  );
}
