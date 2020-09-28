import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import DSCPSIT from '../../Assets/DSCPSIT.png'

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="header-navigation">
                    <NavLink to={'/'} >
                        <img className="logo" src={DSCPSIT} alt="DSC PSIT" />
                    </NavLink>
                
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
                <div className="MyProfile">
                    <text>
                        Samriddhi Agarwal
                    </text>
                    <img />
                    {/* <Avatar>
                    </Avatar> */}
                </div>
            </div>
        )
    }
}