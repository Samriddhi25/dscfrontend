import React from 'react';
import "./404.css";
import error from "../../Assets/welcome.png"

export default class error extends React.Component{
    state={

    }
    render(){
        return(
           <div className="body">
                <img src={error} alt="landing image"/>
                <h1>You Came To Faaaaaaaaaar</h1>
                <p>Get back to Home Page</p>
           </div>
        )
    }
}
