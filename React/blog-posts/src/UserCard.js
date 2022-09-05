import React from "react";
const UserCard = (props) => {
    console.log(props);
  return (
    <div className="ui card">
      <div className="content">
        <div className="header" />Ramakant Shukla</div>
        <div className="description">
            {/* Hey there my name is RK.I live in Ghaziabad. */}
            {props.children}
        </div>
      <div className="ui bottom button">
        <i className="add icon">Add Friend</i>
      </div>
    </div>
  );
};

export default UserCard;
