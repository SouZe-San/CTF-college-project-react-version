import { Link } from "react-router-dom";
import "./heroSectionStyles.scss";
import neoPng from "../../assets/gallery-images/neoPresents.png";
import flagImg from "../../assets/gallery-images/bgg_img_005.png"
function HeroSection() {
  return (
    <div className="heroSection" id="HeroSection">
      <div className="overlay">
        <div className="overlayContent">
          <img
            className="neoIntroduction"
            src={neoPng}
            alt="Neo-presents image"
          />
          <h1 className="heroSectionTitle">
            <div className="upperTitle">CAPTURE</div>
            <div className="lowerTitle">THE FLAG</div>
          </h1>

          <p className="tagline">
            Team up, stealth in, and secure victory in every game!
          </p>

          <Link to="/challenges">
            <button className="ctaBtnOfHero ">
              <img src={flagImg} alt="" style={{width : "20px",display : "inline" , pointerEvents : "none"}} />
              Conquer The Flags
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
