import React from "react";
import northernPic from "./Northern.png";
import southernPic from "./Southern.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: { text: "Northern Hemisphere!", picture: northernPic },
  Southern: { text: "Southern Hemisphere!", picture: southernPic },
};

const Hemisphere = ({ latitude }) => {
  const hemishpere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemishpere];
  return (
    <div className={hemishpere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>Hey you are in {text }</h1>
        </div>
      </div>
    </div>
  );
};

export default Hemisphere;
