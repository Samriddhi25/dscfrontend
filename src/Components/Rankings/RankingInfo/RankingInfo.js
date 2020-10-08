import React from "react";
import "./RankingInfo.css";
import symbol from "../../../Assets/hacker.svg";

export default (props) => {
  return (
    <div className="ranking-Info">

      <div className="rank-title">
        <h1>Samriddhi Agarwal!</h1>
        <img src={symbol} alt="Angular brackets" />'
        <button type="button" onClick={props.close}>Close</button>
      </div> <table>
        <tr>
          <td>Task Task Task Task 1</td>
          <td>6</td>
          <td>12 MArch</td>
          <td>17:23</td>
        </tr>
        <tr>
          <td>Task Task Task Task 1</td>
          <td>6</td>
          <td>12 MArch</td>
          <td>17:23</td>
        </tr>
        <tr>
          <td>Task Task Task Task 1</td>
          <td>6</td>
          <td>12 MArch</td>
          <td>17:23</td>
        </tr>
        <tr>
          <td>Task Task Task Task 1</td>
          <td>6</td>
          <td>12 MArch</td>
          <td>17:23</td>
        </tr>

      </table>
    </div>
  )
}