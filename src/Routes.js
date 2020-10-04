import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Landing from "./Containers/Landing/Landing";
import DashBoard from "./Containers/Dashboard/Dashboard";
import ScoreBoard from "./Containers/ScoreBoard/ScoreBoard";
import StudentProfile from "./Containers/StudentProfile/StudentProfile";
import TaskPage from "./Containers/TaskPage/TaskPage";
import Navigation from "./HOC/Navigation/Navigation";
import Hoc from "./HOC/hocComp";
export default class Routes extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Hoc>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/taskpage" component={TaskPage} />
            <Route path="/scoreboard" component={ScoreBoard} />
            <Route path="/studentprofile" component={StudentProfile} />
          </Switch>
        </Hoc>
      </BrowserRouter>
    );
  }
}
