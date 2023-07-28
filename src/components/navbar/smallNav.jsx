import { Link } from "react-router-dom";
import homeSvg from "../../assets/nav-section-svgs/home-line.svg";
import profileSvg from "../../assets/nav-section-svgs/user_line.svg";

function SmallNav() {
  return (
    <div className="btns ">
      <div className="menu flex justify-between">
        <ul>
          <li>
            <Link to="/">{homeSvg}</Link>
          </li>
          <li>
            <Link to="/#RewardsSection">Rewards</Link>
          </li>
          <li>
            <Link to="/#TopicsSection">Topics</Link>
          </li>
          <li>
            <Link to="/#RulesSection">Rules</Link>
          </li>
          <li>
            <Link to="/dashboard">{profileSvg}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SmallNav;
