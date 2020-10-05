import React from "react";
import "./Notifications.css";
import Notification from  "./Notification/Notification";

const notifications = (props) => {
  return (
    <div className="notifications-info">
      <h2>Notification</h2>
      <Notification/>
    </div>
  );
};

export default notifications;
