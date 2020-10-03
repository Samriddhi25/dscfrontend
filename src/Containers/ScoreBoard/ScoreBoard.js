import React from "react";
import "./ScoreBoard.css";
import score from "../../Assets/stats.jpg"

export default class ScoreBoard extends React.Component {
    
    render(){
        return(
            <div className="body">
                 <div className="header">
                    <img src={score} alt="score image"/>
                </div>
                  <h1>ScoreBoard Page</h1>
            </div>
        )
    }
}