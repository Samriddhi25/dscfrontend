import React from "react";
import "../Rankings/Rankings.css";
import "./Tasks.css"
import tropy from "../../Assets/trophy.png"

const rankings = (props) => {
    return (
        <div className="notifications-Info task">
            <h1 style={{ color: '#000000' }}>AVAILABLE TASKS</h1>
            <table>
                <tr onClick={props.clickEvent}>
                    <div className="TaskMain">
                        <div className="TaskLeft">
                            <div className="TaskTitle">
                                This is the heading for task 1
                            </div>
                            <div className="TaskTags">
                                <div className="tags">
                                    JAvascript
                                </div>
                                <div className="tags">
                                    JAvascript
                                </div>
                                <div className="tags">
                                    JAvascript
                                </div>
                                <div className="tags">
                                    JAvascript
                                </div>
                            </div>
                        </div>
                        <div className="TaskRight">
                            <div className="TaskType">
                                Begineers
                            </div>
                            <div className="TaskAction">
                                <div className="moreInfo">
                                    <button>More Information</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>

                <tr onClick={props.clickEvent}>
                    <div className="TaskMain">
                        <div className="TaskLeft">
                            <div className="TaskTitle">
                                This is the heading for task 1
                            </div>
                            <div className="TaskTags">
                                <div className="tags">
                                    JAvascript
                                </div>
                                <div className="tags">
                                    JAvascript
                                </div>
                                <div className="tags">
                                    JAvascript
                                </div>
                                <div className="tags">
                                    JAvascript
                                </div>
                            </div>
                        </div>
                        <div className="TaskRight">
                            <div className="TaskType">
                                Begineers
                            </div>
                            <div className="TaskAction">
                                <div className="moreInfo">
                                    <button>More Information</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>

                 
            </table>
        </div>
    );
};

export default rankings;
