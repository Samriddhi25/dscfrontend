import React from "react";
import "./TaskPage.css";
import task from "../../Assets/tasks.jpg"

export default class TaskPage extends React.Component {
    
    render(){
        return(
            <div className="body">
                 <div className="header">
                    <img src={task} alt="task image"/>
                </div>
                  <h1>taskpage Page</h1>
            </div>
        )
    }
}