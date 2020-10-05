import React from "react";
import "./ScoreBoard.css";
import score from "../../Assets/stats.jpg";
import Rankings from "../../Components/Rankings/Rankings";
import RankingInfo from "../../Components/Rankings/RankingInfo/RankingInfo";


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