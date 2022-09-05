import React from "react";
import ReactDOM from "react-dom/client";
import HemisphereDisplay from "./HemisphereDisplay";
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );
//   return (
//     <>
//       <div>Latitude</div>
//     </>
//   );
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { latitude: null, errorMessage: "" };
    
  // }

  state = { latitude: null, errorMessage: "" };

//   render() {
//     return (
//       <div>
//         {this.state.latitude}
//         {this.state.errorMessage}
//       </div>
//     );
//   }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
//   componentWillUnmount(){
//     console.log('componentDidMount');
//   }

    render(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>{this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.latitude) {
            return <div><HemisphereDisplay latitude={this.state.latitude}/></div>
        }
        else{
            return <div>Loading ...</div>
        }
    }

    // render(){
    //     if(this.state.errorMessage && !this.state.latitude){
    //         return <div>{this.state.errorMessage}</div>
    //     }
    //     else if (!this.state.errorMessage && this.state.latitude) {
    //         return <div>{this.state.latitude}</div>
    //     }
    //     else{
    //         return <div>Loading ...</div>
    //     }
    // }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
