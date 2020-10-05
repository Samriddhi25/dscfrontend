import React from "react";
import "./Dashboard.css";
import dash from "../../Assets/dashboard.jpg";
import Analysis from "../../Components/Analysis/Analysis";
import Backdrop from "../../Components/Backdrop/Backdrop";
import InfoModal from "../../Components/Analysis/InfoModal/InfoModal";
import UserInfo from "../../Components/UserInfo/UserInfo";
import Notifications from "../../Components/Notifications/Notifications";

export default class DashBoard extends React.Component {
    state = {
        backdrop: false
    }
    openBackdrop = () => {
        this.setState({ backdrop: true })
    }
    closeBackdrop = () => {
        this.setState({ backdrop: false })
    }
    render() {
        return (
            <div className="dashboard-body">
                {this.state.backdrop ? (
                    <React.Fragment>
                        <Backdrop close={this.closeBackdrop} />
                        <InfoModal close={this.closeBackdrop} />
                    </React.Fragment>

                ) : null}
                <div className="header">
                    <img src={dash} alt="dsc psit dashboard" />
                </div>
                <div className="containers">
                    <div className="left-dashboard">
                        <UserInfo />
                        <Analysis clickEvent={this.openBackdrop} />
                    </div>
                    <div className="right-dashboard">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}