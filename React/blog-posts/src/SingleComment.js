import React from "react";
// import profile1 from './pics/10.jpg';
const SingleComment = (props) => {
    // console.log(props)
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="profile pic" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};


export default SingleComment;