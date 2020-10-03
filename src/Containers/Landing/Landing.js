import React from 'react';
import "./Landing.css";
import landing from "../../Assets/login.jpg";

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            types: "login",
            login: false,
            signup: false
        }
    }

    toggle(clicked) {
        if (clicked === "login")
            this.setState({login : !this.state.login})
        else if (clicked === "signup")
            this.setState({signup : !this.state.signup})
    }
    //{this.state.login? "clicked" : ""}

    render() {
        let type = this.state.types;

        return (
            <div className="body">
                <div className="image">
                <img src={landing} alt="landing image" />
                </div>
                <div className="welcome">
                    <p>WELCOME</p>
                    <p>Get into DSC PSIT Web Panel.</p>
                    <p>Hope you are having a great day.</p>
                    <button className="clicked" onClick={() => ( this.setState({ types: "login" }), this.toggle("login")) }>Login</button>
                    <button className={this.state.signup? "clicked" : ""} onClick={() => ( this.setState({ types: "signup" }), this.toggle("signup")) }>Sign up</button>
                </div>
                {type == "login" ?
                    <div className="loginform">
                        <h2>LOGIN</h2>
                        <form>
                            <label>Email</label>
                            <input type="text" placeholder="email" />
                            <label>Password</label>
                            <input type="text" placeholder="password" />
                        </form>
                    </div>
                    :
                type == "emailreset" ?
                    <div className="form">
                    </div>
                    :
                type == "passreset" ?
                    <div className="form">
                    </div>
                    :
                    <div className="form">
                    </div>
                }
            </div>
        )
    }
}
