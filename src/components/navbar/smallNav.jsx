import { Link } from "react-router-dom";
import "./smallNavStyles.scss";
function SmallNav() {
  return (
    <nav className="smallNavigation">
          <ul >
            <li>
              <Link to="/">
              <svg viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232A1.041 1.041 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 .98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3z"/></svg>
              </Link>
            </li>
            <li>
              <Link to="/#RewardsSection"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M39.3 32.1h21.4a2 2 0 0 0 2-2v-4a6 6 0 0 0-5.8-6H43.3a5.91 5.91 0 0 0-5.8 6v4a1.74 1.74 0 0 0 1.8 2Z"/><path d="M71.4 25.2h-2a.94.94 0 0 0-1 1v4a7.9 7.9 0 0 1-7.8 7.9H39.3a7.9 7.9 0 0 1-7.8-7.9v-4a.94.94 0 0 0-1-1h-2a5.91 5.91 0 0 0-5.8 6v42.6a6 6 0 0 0 5.8 6h42.9a5.91 5.91 0 0 0 5.8-6V31.2a5.79 5.79 0 0 0-5.8-6ZM68.7 73a1.49 1.49 0 0 1-1.2 1.2H56.3c-.7 0-1-.8-.3-1.3l3.6-3.8-7-7H32.4a1.07 1.07 0 0 1-1-1v-4.5a1.08 1.08 0 0 1 1-1h20.2l6.9-7-3.6-3.6c-.5-.6-.3-1.4.4-1.4h11.1a1.49 1.49 0 0 1 1.2 1.2v11.1c0 .7-.8 1-1.3.3l-3.6-3.5-6.2 6.2 6.2 6.1 3.6-3.6c.6-.5 1.4-.3 1.4.4Z"/></svg></Link>
            </li>
            <li>
              <Link to="/#TopicsSection"><svg viewBox="0 0 16 16" fill="#030708" style={{fill : "white"}} xmlns="http://www.w3.org/2000/svg"><path d="M1 1v15h2v-6h4l2 2h6V3H9L7 1H1Z" fill="#030708"/></svg></Link>
            </li>
            <li>
              <Link to="/#RulesSection"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12h-4a.5.5 0 0 0-.5.5V20h5v-7.5a.5.5 0 0 0-.5-.5ZM14 4h-4a.5.5 0 0 0-.5.5V20h5V4.5A.5.5 0 0 0 14 4Zm7.5 4h-4a.5.5 0 0 0-.5.5V20h5V8.5a.5.5 0 0 0-.5-.5Z"/></svg></Link>
            </li>
            <li>
              <Link to="/dashboard">
              <svg viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a3.499 3.499 0 1 0 0 6.996A3.499 3.499 0 1 0 7.5 0Zm-2 8.994a3.5 3.5 0 0 0-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 0 0-3.5-3.5h-4Z" fill="#000"/></svg>
              </Link>
            </li>
          </ul>
    </nav>
  );
}

export default SmallNav;
