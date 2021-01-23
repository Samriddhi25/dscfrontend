import React from "react";
import "./TaskPage.css";
import task from "../../Assets/tasks.jpg"
import Backdrop from "../../Components/Backdrop/Backdrop";
import Tasks from "../../Components/Tasks/Tasks";
import Task from "../../Components/Tasks/Task/Task";

export default class TaskPage extends React.Component {
    state = {
        backdrop: false
    }
    openBackdrop = () => {
        this.setState({ backdrop: true })
    }
    closeBackdrop = () => {
        this.setState({ backdrop: false })
    }
    render(){
        return(
            <div className="body">
                  {this.state.backdrop ? (
                    <React.Fragment>
                        <Backdrop close={this.closeBackdrop} />
                        <Task close={this.closeBackdrop} />
                    </React.Fragment>

                ) : null}
                 <div className="header">
                    <img src={task} alt="task image"/>
                </div>
                <div className="">
                    <Tasks clickEvent={this.openBackdrop} />
                </div>
            </div>
        )
    }
}