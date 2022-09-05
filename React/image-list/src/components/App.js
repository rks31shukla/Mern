import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (entry) => {
    // console.log("Parent : " + entry);
    const response = await axios.get(
      `https://pixabay.com/api/?key=29733167-43cdb61aa5879061d69f0b882&q=${entry}&image_type=photo`
    ); // use `instead of '' or ""
    // console.log(response.data.hits);
    // console.log(this);
    this.setState({ images: response.data.hits });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        {/* We have {this.state.images.length} images */}
        <ImageList images= {this.state.images}/>
      </div>
    );
  }
}
export default App;
