import React from 'react';
import "./InfoModal.css";

export default (props)=>{
    return(
        <div className="info-modal">
            <h1>This is the Task List!</h1>
            <button type="button" onClick={props.close}>Close</button>
            <table>
                <tr>
                    <td>Samriddhi Agarwal</td>
                    <td>Clamied</td>
                    <td>12 MArch</td>
                    <td>17:23</td>
                </tr>
            </table>
        </div>
    )
}