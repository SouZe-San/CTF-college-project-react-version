import topicsTBS from "../../assets/title-stoked-bg/topicsTitleBgStoked.svg";

import "./topicSectionStyles.scss";

const topicNames = [
  "PWN",
  "Cryptography",
  "Promt injection",
  "Reverse engineering",
  "Web security",
  "Hardware exploration",
];

function Topics() {
  return (
    <div className="topicsSection" id="TopicsSection">
      <div className="header">
        <img className="bg-title-stoked" src={topicsTBS} alt="competion title svg" />
        <h1 className="monumentFontStyle topicsTitle ">TOPICS</h1>
      </div>

      <div className="topicContainer">
        {topicNames.map((topicName, index) => {
          return (
            <div
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              key={index}
              className="topicWrapper "
            >
              <div className="topicName">{topicName}</div>
              <div className="topicId">(00{index + 1})</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Topics;
