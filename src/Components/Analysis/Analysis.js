import React from "react";
import "./Analysis.css";
import InfoModal from "./InfoModal/InfoModal"

function ClaimModal() {
    <InfoModal />
}

const analysis = (props) => {
    <div className="Analysis-Info">
        <p>Tasks</p>
        <p>Claims</p>
        <table onClick={() => ClaimModal()}>
            <tr>
                <td>Some random task name</td>
                <td>34</td>
            </tr>
        </table>
    </div>
};

export default analysis;