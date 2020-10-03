import React from "react";
import "./Landing.css";
import landing from "../../Assets/dsc-psit-login.jpg";

export default class Landing extends React.Component {
  state = {
    types: "login",
  };

  toggle(clicked) {
    if (clicked === "login") this.setState({  types : "login" });
    else if (clicked === "signup")
      this.setState({types : "signup" });
  }
  //{this.state.login? "clicked" : ""}

  render() {
    let type = this.state.types;

    return (
      <div className="body">
        <div className="image">
          <img src={landing} alt="DSC-psit-landing-page" />
        </div>
        <div className="welcome">
          <div className="welcome-header">
            <p>WELCOME</p>
            <p>Get into DSC PSIT Web Panel.</p>
            <p>Hope you are having a great day.</p>
          </div>
          <div className="welcome-buttons">
            <button
              className={`loginButton ${this.state.types ==="login" ? 'clicked' : ''}`}
              onClick={() => (
                 this.toggle("login")
              )}
            >
              Login
            </button>
            <button
              className={`loginButton ${this.state.types === "signup" ? 'clicked' : ''}`}
              onClick={() => (
                 this.toggle("signup")
              )}
            >
              Sign up
            </button>
          </div>
        </div>
        {type == "login" ? (
          <div className="loginform">
            <h2>LOGIN</h2>
            <form>
              <label>Email</label>
              <input type="text" placeholder="email" />
              <label>Password</label>
              <input type="text" placeholder="password" />
            </form>
          </div>
        ) : type == "emailreset" ? (
          <div className="form"></div>
        ) : type == "passreset" ? (
          <div className="form"></div>
        ) : (
          <div className="form"></div>
        )}
      </div>
    );
  }
}
