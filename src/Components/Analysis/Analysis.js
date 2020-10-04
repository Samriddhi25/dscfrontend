import React from "react";
import "./Analysis.css";


const analysis = (props) => {
  return (
    <div className="Analysis-Info">
      <p>Tasks</p>
      <p>Claims</p>
      <table >
        <tr onClick={props.clickEvent}>
          <td>Some random task name</td>
          <td>34</td>
        </tr>
      </table>
    </div>
  );
};

export default analysis;
