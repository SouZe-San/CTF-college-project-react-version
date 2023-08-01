import "./heroSectionStyles.scss";

function HeroSection() {

  return (
    <div className="heroSection" id="HeroSection">
      <div className="overlay">
        <div className="overlayContent">
          <h1 className="heroSectionTitle">
            <div className="upperTitle">CAPTURE</div>
            <div className="lowerTitle">THE FLAG</div>
          </h1>

          <p className="tagline">
            Team up, stealth in, and secure victory in every game!
          </p>
          <button className="ctaBtnOfHero">
            {" "}
            <a href="/flags">Conquer The Flags</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
