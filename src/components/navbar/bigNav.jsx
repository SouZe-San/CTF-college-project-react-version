import { Link } from "react-router-dom";
import "./navbar.scss";

function bigNav() {
  return (
    <nav>
      <div className="logo">
        <h1 className="monumentFontStyle ">N</h1>
      </div>
      <div className="btns flex justify-between">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#RewardsSection">Rewards</a>
            </li>
            <li>
              <a href="/#TopicsSection">Topics</a>
            </li>
            <li>
              <a href="/#RulesSection">Rules</a>
            </li>
            <li>
              <Link to="/dashboard">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="cta_btns">
          <button className="">
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default bigNav;
