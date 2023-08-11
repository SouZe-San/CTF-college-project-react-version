import { Link } from "react-router-dom";
import homeSvg from "../../assets/nav-section-svgs/home-line.svg";
import profileSvg from "../../assets/nav-section-svgs/user_line.svg";

function SmallNav() {
  return (
    <nav>
      <div className="btns ">
        <div className="menu flex justify-between">
          <ul>
            <li>
              <Link to="/">
                <img src={homeSvg} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/#RewardsSection">R</Link>
            </li>
            <li>
              <Link to="/#TopicsSection">Topics</Link>
            </li>
            <li>
              <Link to="/#RulesSection">Rules</Link>
            </li>
            <li>
              <Link to="/dashboard">
                <img src={profileSvg} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SmallNav;
