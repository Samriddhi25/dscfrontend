import React from "react";
import "./Rankings.css";
import RankingInfo from  "./RankingInfo/RankingInfo";

const rankings = (props) => {
  return (
    <div className="notifications-Info">
      <h2>RankingInfo</h2>
      <RankingInfo/>
    </div>
  );
};

export default rankings;
