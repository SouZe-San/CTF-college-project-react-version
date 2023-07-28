import { Link } from "react-router-dom";
import "./navbar.scss";

function bigNav() {
  return (
    <nav>
      <div className="logo">
        <h1>CTF</h1>
      </div>
      <div className="btns flex justify-between">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
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
