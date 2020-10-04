import React from "react";
import "./StudentProfile.css";
import trophy from "../../Assets/hacker.svg";

export default class StudentProfile extends React.Component {

    logout() {
        console.log("logged out");
    }

    render() {
        return (
            <div className="body">
                <div className="profile-left">
                    <div className="profile">
                        <div className="profile-header">
                            <p>Samriddhi Agarwal</p>
                            <p>Welcome to Your Panel.</p>
                            <p>Life fucks us all.</p>
                        </div>
                        <div className="buttons">
                            <button className="profile-buttons" onClick={() => this.logout()}>
                                Log-Out
                  </button>
                        </div>
                    </div>
                </div>
                <div className="profile-right">
                    <div className="about">
                        <h1>My Profile</h1>
                        <p>37</p>
                        <img src={trophy} alt="dsc-winning" />
                    </div>
                    <div className="my-info">
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>Samriddhi Agarwal</td>
                            </tr>
                            <tr>
                                <td>GitHub</td>
                                <td>/Samriddhi25</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>samriddhiagarwal12@gmail.com</td>
                            </tr>
                        </table>
                    </div>
                    <div className="my-task-info">
                        <h2>Task Information</h2>
                        <hr />
                        <table>
                            <tr>
                                <td>Claimed</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>Accepted</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>Denied</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td>Total Score</td>
                                <td>37</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}