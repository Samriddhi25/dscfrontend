import React from 'react';
import Navigation from "./Navigation/Navigation";
//import "./hocComp.css"

export default class Hoccomp extends React.Component{
    state={

    }
    render(){
        return(
            <div className="main">
                <Navigation auth={true}/>
                {this.props.children}
            </div>
        )
    }
}