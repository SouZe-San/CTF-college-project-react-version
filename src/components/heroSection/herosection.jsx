import { Link } from "react-router-dom";
import "./heroSectionStyles.scss";
import neoPng from "../../assets/gallery-images/neoPresents.png"
function HeroSection() {
  return (
    <div className="heroSection" id="HeroSection">
      <div className="overlay">
        <div className="overlayContent">
         <img className="neoIntroduction" src={neoPng} alt="Neo-presents image" />
          <h1 className="heroSectionTitle">
            <div className="upperTitle">CAPTURE</div>
            <div className="lowerTitle">THE FLAG</div>
          </h1>

          <p className="tagline">Team up, stealth in, and secure victory in every game!</p>
          <button className="ctaBtnOfHero">
            {" "}
            <Link to="/challenges">Conquer The Flags</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
