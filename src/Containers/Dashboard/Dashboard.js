import React from "react";
import "./Dashboard.css";
import dash from "../../Assets/dashboard.jpg"

export default class DashBoard extends React.Component {
    
    render(){
        return(
            <div className="body">
                <div className="header">
                    <img src={dash} alt="dash image"/>
                </div>
                  <h1>Dashboard Page</h1>
            </div>
        )
    }
}