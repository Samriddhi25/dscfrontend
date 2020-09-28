import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Landing from "./Containers/Landing/Landing";
import DashBoard from "./Containers/Dashboard/Dashboard";
import ScoreBoard from "./Containers/ScoreBoard/ScoreBoard";
import StudentProfile from "./Containers/StudentProfile/StudentProfile";
import TaskPage from "./Containers/TaskPage/TaskPage";
import Navigation from "./HOC/Navigation/Navigation";

export default class Routes extends Component {
    state = {

    }

    render() {
        return (
            <BrowserRouter>
            <Navigation/>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/DashBoard" component={DashBoard} />
                    <Route path="/TaskPage" component={TaskPage} />
                    <Route path="/ScoreBoard" component={ScoreBoard} />
                    <Route path="/StudentProfile/:id" component={StudentProfile} />
                </Switch>
            </BrowserRouter>
        )
    }
}