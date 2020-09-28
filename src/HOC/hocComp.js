import React from 'react';
import Navigation from "./Navigation/Navigation";


export default class Hoccomp extends React.Component{
    state={

    }
    render(){
        return(
            <div>
                <Navigation/>
                {this.props.children}
            </div>
        )
    }
}