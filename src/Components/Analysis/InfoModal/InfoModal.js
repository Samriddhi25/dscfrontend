import React from 'react';
import "./InfoModal.css";

export default (props)=>{
    return(
        <div className="info-modal">
            <h1>This is the Task List!</h1>
            <button type="button" onClick={props.close}>Close</button>
        </div>
    )
}