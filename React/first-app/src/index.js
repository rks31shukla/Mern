import React from "react";
import ReactDOM from "react-dom";
 
//import variable from <name of dependancy or file>
//  variable name must not be React or ReactDOM . It can be anything.

//Creating Functional Component

// const App = () => {
//   // also written as const App = function () {
// //   const buttonText = "Click me!";
// const buttonText={text:'submit'};
//   return (
//     <div>
//       <label for="name" className="label">
//         enter email
//       </label>
//       <input id="name" type="text" />
//       <button style={{ backgroundColor: "red", color: "white" }}>
//         {/* {getButtonText()} */}
//         {buttonText.text}
//       </button>
//     </div>
//   );
// };


const App = () => {
    // also written as const App = function () {
  //   const buttonText = "Click me!";
  const buttonText={ backgroundColor: "red", color: "white" };
    return (
      <div>
        <label htmlFor="name" className="label">
          enter email
        </label>
        <input id="name" type="text" />
        <button style={buttonText}>
          {getButtonText()}
          {/* {buttonText.text} */}
        </button>
      </div>
    );
  };

function getButtonText() {
    return ['asdad',1234];
}

ReactDOM.render(<App />, document.querySelector("#root"));
