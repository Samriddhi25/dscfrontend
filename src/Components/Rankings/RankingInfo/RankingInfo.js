import React from "react";
import "./RankingInfo.css";
import symbol from "../../../Assets/hacker.svg";

export default (props) => {
  return (
    <div className="Analysis-Info">
        <img src={symbol} alt="Angular brackets"/>
        <p>rankinginfo notifications notification</p>
        <h1>This is the Task List!</h1>
            <button type="button" onClick={props.close}>Close</button>
            <table>
                <tr>
                    <td>Samriddhi Agarwal</td>
                    <td>Clamied</td>
                    <td>12 MArch</td>
                    <td>17:23</td>
                </tr>
            </table>
    </div>
  )
}