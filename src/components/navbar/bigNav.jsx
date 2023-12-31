import { Link } from "react-router-dom";
import "./navbar.scss";

function bigNav() {
  return (
    <nav>
      <div className="logo">
        <span><svg width="71" height="21" viewBox="0 0 71 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.938.656c1.083 0 2.145.125 3.187.375 1.063.25 2.073.625 3.031 1.125a8.46 8.46 0 0 1 2.532 1.938c.75.812 1.156 1.781 1.218 2.906v11.281c-.125 1.25-.812 1.927-2.062 2.032a2.28 2.28 0 0 1-1.532-.563 1.945 1.945 0 0 1-.625-1.469V7.97c-.041-.646-.291-1.177-.75-1.594a4.944 4.944 0 0 0-1.5-1.031 7.913 7.913 0 0 0-1.718-.563 8.478 8.478 0 0 0-1.781-.187c-.605 0-1.209.062-1.813.187a8.725 8.725 0 0 0-1.719.563 5.512 5.512 0 0 0-1.5 1.031c-.437.417-.677.948-.718 1.594v10.31c-.105 1.25-.782 1.927-2.032 2.032a2.28 2.28 0 0 1-1.531-.563A1.945 1.945 0 0 1 0 18.281V7c.063-1.125.458-2.094 1.188-2.906a8.46 8.46 0 0 1 2.53-1.938c.96-.5 1.96-.875 3-1.125a14.007 14.007 0 0 1 3.22-.375Zm19.718.844H41.72c.583.02 1.062.24 1.437.656a2.1 2.1 0 0 1 .594 1.5c-.104 1.25-.781 1.927-2.031 2.031h-11c-.792.042-1.448.344-1.969.907a5.397 5.397 0 0 0-1.156 1.937 7.062 7.062 0 0 0-.344 2.188c0 .75.115 1.49.344 2.219.25.708.635 1.343 1.156 1.906.52.562 1.177.864 1.969.906h11c.583.02 1.062.24 1.437.656a2.1 2.1 0 0 1 .594 1.5 2.073 2.073 0 0 1-.625 1.438c-.375.375-.844.573-1.406.593H29.656c-1.458-.083-2.666-.635-3.625-1.656A9.543 9.543 0 0 1 24 14.75a13.888 13.888 0 0 1-.594-4.031c0-1.375.209-2.719.625-4.031a9.258 9.258 0 0 1 2.032-3.5C27 2.146 28.197 1.583 29.655 1.5Zm14.032 9.094c0 .583-.209 1.073-.626 1.469a1.945 1.945 0 0 1-1.468.624h-9.438a2.101 2.101 0 0 1-1.5-.593 2.101 2.101 0 0 1-.593-1.5 2.1 2.1 0 0 1 .593-1.5 2.1 2.1 0 0 1 1.5-.594h9.438c.583 0 1.073.208 1.468.625.417.396.626.885.626 1.469ZM63.656 1.5a4.67 4.67 0 0 1 2.844 1 7.574 7.574 0 0 1 2 2.313c.52.895.906 1.843 1.156 2.843.25 1 .375 2.021.375 3.063 0 1.375-.219 2.729-.656 4.062a8.884 8.884 0 0 1-2.094 3.5c-.958 1.021-2.166 1.573-3.625 1.657H52.75c-1.458-.063-2.677-.605-3.656-1.625A8.854 8.854 0 0 1 47 14.78a14.203 14.203 0 0 1-.594-4.062c0-1.375.209-2.719.625-4.031a9.032 9.032 0 0 1 2.063-3.532c.979-1.041 2.198-1.594 3.656-1.656h10.906Zm-1.062 14.25c.791-.042 1.448-.333 1.968-.875a4.863 4.863 0 0 0 1.157-1.938c.229-.729.344-1.468.344-2.218s-.126-1.48-.376-2.188a5.045 5.045 0 0 0-1.124-1.937c-.521-.563-1.178-.865-1.97-.907H53.72c-.792.042-1.448.344-1.969.907a5.397 5.397 0 0 0-1.156 1.937 7.062 7.062 0 0 0-.344 2.188c0 .75.115 1.49.344 2.219a5.043 5.043 0 0 0 1.125 1.937c.541.542 1.208.833 2 .875h8.875Z" fill="#fff"/></svg></span>
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
        <Link to="/login">
          <button className="">
           Log in
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default bigNav;

