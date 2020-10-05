import React from "react";
import "./Analysis.css";


const analysis = (props) => {
  return (
    <div className="analysis-info">
      <table >
          <th>Tasks</th>
          <th>Claims</th>
        <tr onClick={props.clickEvent}>
          <td>Some raam task nam</td>
          <td>34</td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>Some random task name</td>
          <td>34</td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>Some random task name</td>
          <td>34</td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>Some random task name</td>
          <td>34</td>
        </tr> <tr onClick={props.clickEvent}>
          <td>Some random task name</td>
          <td>34</td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>Some random task name</td>
          <td>34</td>
        </tr>
      </table>
    </div>
  );
};

export default analysis;
