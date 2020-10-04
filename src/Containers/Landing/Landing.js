import React from "react";
import "./Landing.css";

export default class Landing extends React.Component {
  state = {
    types: "login",
  };

  toggle(clicked) {
    if (clicked === "login") this.setState({ types: "login" });
    else if (clicked === "signup") this.setState({ types: "signup" });
  }

  render() {
    let type = this.state.types;

    return (
      <div className="body">
        <div className="landing-left">
         
          <div className="welcome">
            <div className="welcome-header">
              <p>WELCOME</p>
              <p>Get into DSC PSIT Web Panel.</p>
              <p>Hope you are having a great day.</p>
            </div>
            <div className="welcome-buttons">
              <button
                className={`loginButton ${
                  this.state.types === "login" ? "clicked" : ""
                }`}
                onClick={() => this.toggle("login")}
              >
                Login
              </button>
              <button
                className={`loginButton ${
                  this.state.types === "signup" ? "clicked" : ""
                }`}
                onClick={() => this.toggle("signup")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="landing-right">
        {type == "login" ? (
            <div className="loginform">
               <h2>LOGIN</h2>
               <div className="details">
                    <form>
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" />
                        <label>Password</label>
                        <input type="text" placeholder="Enter your password" />
                    </form>
                    <div className="submit">
                        <button>Login</button>
                        <p className="forgot" onClick={() => this.setState({ types: "emailreset" })}>Forgot Password ?</p>
                    </div>
                </div>
            </div>
        ) : type == "emailreset" ? (
          <div className="emailform">
               <h2>RESET PASSWORD EMAIL</h2>
               <div className="details">
                    <form>
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" />
                    </form>
                    <div className="submit-signup">
                        <button onClick={() => this.setState({ types: "passreset" })}>Send reset Email</button>
                    </div>
                </div>
          </div>
        ) : type == "passreset" ? (
            <div className="emailform">
            <h2>RESET PASSWORD</h2>
            <div className="details">
                 <form>
                     <label>Password</label>
                     <input type="text" placeholder="Enter new password" />
                     <label>Re-enter Password</label>
                     <input type="text" placeholder="Re-enter your new password" />
                 </form>
                 <div className="submit-signup">
                     <button>Set Password</button>
                 </div>
             </div>
       </div>
        ) : (
            <div className="signupform">
            <h2>SIGNUP</h2>
            <div className="signup-details">
                 <form>
                     <label>Full Name</label>
                     <input type="text" placeholder="Enter your name" />
                     <label>Email</label>
                     <input type="text" placeholder="Enter your email" />
                     <label>Github URL</label>
                     <input type="text" placeholder="Enter the URL" />
                     <label>Password</label>
                     <input type="text" placeholder="Enter your password" />
                     <label>Confirm Password</label>
                     <input type="text" placeholder="Re-enter your password" />
                 </form>
                 <div className="submit-signup">
                     <button>Sign-up into DSC</button>
                 </div>
             </div>
         </div>
        )}
        </div>
      </div>
    );
  }
}
