/* eslint-disable no-unused-vars */
import React from "react";
import RankingBlock from "../../components/Dashboard/RankingBlock";
import NotValid from "../../components/notValid/NotValid";

import { userDetails, rankersList } from "../../assets/Json/dashboard";

const page = () => {
  return (
    <div className="my-32">
      {rankersList && userDetails ? (
        <RankingBlock rankersList={rankersList} userDetails={userDetails} />
      ) : (
        <NotValid />
      )}
    </div>
  );
};

export default page;
