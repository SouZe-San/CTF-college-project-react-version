// Added style
import "./mainblock.scss";

import InputCard from "./InputCard";
const MainBlock = () => {
  return (
    <div
      className="loginContainer flex justify-center items-center"
      style={{ minHeight: "calc(100vh)" }}
    >
      <div className="card_case flex">
        <div className="page_details flex-none relative"> </div>
        <div className="page_input flex-grow">
          <InputCard />
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
