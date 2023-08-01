"use client";
import "./rulesSectionStyles.scss";

import rulesBTS from "../../assets/title-stoked-bg/rulesTitleBgStoked.svg";
import { useState } from "react";
function Rules() {
  const [isActive, setIsActive] = useState(true);
  const theRules = [
    {
      id: 1,
      question: "Max team size",
      answer:
        "As this is a team based game so every team must have to have 4 players and team size is limit is also up to 4 players.",
    },
    {
      id: 2,
      question: "Disqualification criteria",
      answer:
        "All the above rules must have to be maintained at all cost any violation of any of the rules may lead to disqualification of the entire team.",
    },
    {
      id: 3,
      question: "Relation between teams",
      answer: "Collaboration between competing teams is not allowed. ",
    },
    {
      id: 4,
      question: "Search on your phone or tablet",
      answer: "",
    },
  ];

  // const rules = [
  //   "Treat everyone with respect in discussion groups. We do not tolerate any kind of harassment.",
  //   "You are not allowed to brute-force any challenge on a server, unless specified otherwise.",
  //   "Do not share your login credentials with anyone other than your teammates.",
  //   "Violation of any of the rules may lead to disqualification.",
  //   "Regarding all disputes, the decision by admins is final.",
  //   "Collaboration between competing teams is not allowed.",
  //   "Posting flags in any channel is strictly prohibited.",
  //   "The flag format is: CTF{th1s_i5_4_s4mpl3_fl4g}",
  //   "Do not post write-ups until the CTF is over.",
  //   "Do not hack the CTF infrastructure.",
  //   "Team size is up to 4 players.",
  // ];

  return (
    <div className="rulesSection" id="RulesSection">
      <div className="header">
        <img
          className="bg-title-stoked"
          src={rulesBTS}
          alt="competion title svg"
        />
        <h1 className="ruleSectionTitle sectionTitle">TERMS & RULES</h1>
      </div>

      <ul>
        {theRules.map((rule) => (
          <li key={rule.id} id={rule.id}>
            <div
              className={`faq ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              {rule.question}
              <svg
                className={isActive ? "active" : ""}
                viewBox="0 0 320 512"
                width="100"
                title="angle-down"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
              </svg>
            </div>
            <p className={`answer  ${isActive ? "active" : ""}`}>
              {rule.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Rules;
{
  /* {rules.map((rule, index) => (
          <li className="rule" key={index}>
            {rule}
          </li>
        ))} */
}
