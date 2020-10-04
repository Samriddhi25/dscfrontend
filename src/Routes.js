import React, { Component, Suspense } from "react";
import { Switch, Route,  BrowserRouter } from "react-router-dom";
const Landing = React.lazy(()=>import("./Containers/Landing/Landing"));
const DashBoard = React.lazy(()=>import("./Containers/Dashboard/Dashboard"));
const ScoreBoard = React.lazy(()=> import("./Containers/ScoreBoard/ScoreBoard"));
const StudentProfile = React.lazy(()=> import("./Containers/StudentProfile/StudentProfile"));
const TaskPage = React.lazy(()=>import("./Containers/TaskPage/TaskPage"));
const Hoc = React.lazy(()=> import("./HOC/hocComp"));
export default class Routes extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hoc>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/taskpage" component={TaskPage} />
            <Route path="/scoreboard" component={ScoreBoard} />
            <Route path="/studentprofile" component={StudentProfile} />
          </Switch>
        </Hoc>
        </Suspense>
      </BrowserRouter>
    );
  }
}
