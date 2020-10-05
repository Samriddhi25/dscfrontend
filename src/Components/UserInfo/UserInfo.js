import React from "react";
import "./UserInfo.css";

const userinfo = (props) => {
    return (
    <div className="user-info">
        <h2>User Information</h2>
        <table>
            <tr>
                <td>Name</td>
                <td>Aashish Peepra</td>
            </tr>
            <tr>
                <td>Title</td>
                <td>Web Development Lead</td>
            </tr>
        </table>
    </div>
    )
};

export default userinfo;