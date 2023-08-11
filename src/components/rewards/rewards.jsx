import "./rewardsstyle.scss";

// import rewardsBTS from  "../../assets/title-stoked-bg/rewardsTitleBgStoked.svg"
// import gridLines from "../../assets/gallery-images/grid-lines-02.svg"
import winnerSvg001 from "../../assets/gallery-images/Winners_Flatline.svg";
import winnerSvg002 from "../../assets/gallery-images/Winners_Monochromatic.svg";
import winnerSvg003 from "../../assets/gallery-images/Winners_Two Color.svg";

const RewardCard = () => {
  return (
    <div className="outerCard">
      <div className="innerCard">
        <h1>REWARDS</h1>
        <div className="container">
          <div className="content">
            <h3></h3>
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
