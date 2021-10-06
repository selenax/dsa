import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

const title = "HackerMaps";
const locations = [
  "Lombard St, San Francisco, CA, USA",
  "PIER 39, The Embarcadero, San Francisco, CA, USA",
  "Golden Gate Bridge, San Francisco, CA, USA",
  `Fisherman's Wharf, San Francisco, CA, USA`,
  "Alcatraz Island, San Francisco, CA, USA",
];

class App extends Component {
  constructor() {
    super();
    this.state = { locations: [...locations] };
  }

  onArrowUp = (index) => {
      console.log(index)
    let newList = [...this.state.locations];
    if (index !== 0) {
      let temp = newList[index];
      newList[index] = newList[index - 1];
      newList[index - 1] = temp;
    }
    this.setState({
      locations: newList,
    });
  };

  onArrowDown = (index) => {
    console.log(index)
  let newList = [...this.state.locations];
  if (index !== newList.length-1) {
    let temp = newList[index];
    newList[index] = newList[index + 1];
    newList[index + 1] = temp;
  }
  this.setState({
    locations: newList,
  });
};

  render() {
    return (
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <Navigation
          locations={this.state.locations}
          onMoveUp={this.onArrowUp}
          onMoveDown={this.onArrowDown}
        />
      </div>
    );
  }
}

export default App;
