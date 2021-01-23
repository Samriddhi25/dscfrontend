import React from "react";
import "../../Rankings/RankingInfo/RankingInfo.css";
import symbol from "../../../Assets/hacker.svg";

export default (props) => {
  return (
    <div className="ranking-Info">

      <div className="rank-title">
        <h1>Samriddhi Agarwal!</h1>
        <img src={symbol} alt="Angular brackets" />'
        <button type="button" onClick={props.close}>Close</button>
      </div> 

    </div>
  )
}