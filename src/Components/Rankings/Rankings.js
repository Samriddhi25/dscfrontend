import React from "react";
import "./Rankings.css";
import tropy from "../../Assets/trophy.png"

const rankings = (props) => {
  return (
    <div className="notifications-Info">
      <h1  style={{color: '#000000'}}>STUDENT RANKING</h1>
      <table>
        <tr onClick={props.clickEvent}>
          <td>1.</td>
          <td>Samriddhi Agarwal Agarwal</td>
          <td>35</td>
          <td><img src={tropy} alt="Dsc psit ranking"/></td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>1.</td>
          <td>Samriddhi Agarwal</td>
          <td>35</td>
          <td><img src={tropy} alt="Dsc psit ranking"/></td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>1.</td>
          <td>Samriddhi Agarwal</td>
          <td>35</td>
          <td><img src={tropy} alt="Dsc psit ranking"/></td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>1.</td>
          <td>Samriddhi Agarwal</td>
          <td>35</td>
          <td><img src={tropy} alt="Dsc psit ranking"/></td>
        </tr>
        <tr onClick={props.clickEvent}>
          <td>1.</td>
          <td>Samriddhi Agarwal</td>
          <td>35</td>
          <td><img src={tropy} alt="Dsc psit ranking"/></td>
        </tr>
      </table>
    </div>
  );
};

export default rankings;
