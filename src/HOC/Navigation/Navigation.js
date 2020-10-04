import React from "react";
import { Link, NavLink} from "react-router-dom";
import "./Navigation.css";
import DSCPSIT from '../../Assets/DSCPSIT.png'
import Avatar from '../../Assets/hacker.svg'

export default class Navigation extends React.Component {    
    state={
        user: "student"
    }

    navigate() {
        if (this.state.user == "mentor") console.log("logout");
        else if (this.state.user == "student")  window.location.assign("/studentprofile")
    }

    render() {
        return (
            <div className="header-navigation">
                <div className="poster-holder">
                    <NavLink to={'/'} >
                        <img  src={DSCPSIT} alt="DSC PSIT" />
                    </NavLink>
                </div>
                    
                
                <div className="nav-content">
                    <Link to={'/DashBoard'} >
                        <text>DashBoard</text>
                    </Link>
                    <Link to={'/TaskPage'} >
                        <text>Tasks</text>
                    </Link>
                    <Link to={'/ScoreBoard'} >
                        <text>ScoreBoard</text>
                    </Link>
                </div>
                <div className="myprofile">
                    <text>
                        Samriddhi Agarwal
                    </text>
                    <img src={Avatar} alt="my profile" onClick={() => this.navigate()}/>
                </div>
            </div>
        )
    }
}