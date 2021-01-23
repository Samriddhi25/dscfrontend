import React from "react";
import "./ScoreBoard.css";
import score from "../../Assets/stats.jpg";
import Backdrop from "../../Components/Backdrop/Backdrop";
import Rankings from "../../Components/Rankings/Rankings";
import RankingInfo from "../../Components/Rankings/RankingInfo/RankingInfo";


export default class ScoreBoard extends React.Component {
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
            <div className="body" id="mainbody">
                {this.state.backdrop ? (
                    <React.Fragment>
                        <Backdrop close={this.closeBackdrop} />
                        <RankingInfo close={this.closeBackdrop} />
                    </React.Fragment>

                ) : null}
                 <div className="header">
                    <img src={score} alt="dsc score board"/>
                </div>
                <div className="">
                    <Rankings clickEvent={this.openBackdrop} />
                </div>
            </div>
        )
    }
}