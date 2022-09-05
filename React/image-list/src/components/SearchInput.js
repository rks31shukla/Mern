import React, { Component } from "react";

export default class SearchInput extends Component {
  // constructor(){
  //   super()
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = {entry:''};
   onFormSubmit = (event)=>{
    event.preventDefault()
  // console.log(this.state.entry)
  this.props.onSearchSubmit(this.state.entry)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                className=""
                placeholder="Search ..."
                onChange={(event) => this.setState({entry:event.target.value})}
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
