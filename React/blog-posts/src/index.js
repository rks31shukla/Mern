import React from "react";
import ReactDOM from "react-dom/client";
import profile1 from "./pics/7.jpg";
import profile2 from "./pics/3.jpg";
import profile3 from "./pics/1.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
const App = () => {
  return (
    <div className="ui comments">
    <UserCard>
        <div>
            Hello my name is Ramakant Shukla.I am from Ghaziabad.
        </div>
    </UserCard>
      <UserCard>
        <SingleComment
          name="Ravi"
          date="Today At 5pm"
          text="its amazing"
          avatar={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Jack"
          date="Today At 6pm"
          text="Not amazing"
          avatar={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          date="Today At 7pm"
          text="fantastic"
          avatar={profile3}
        />
      </UserCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
