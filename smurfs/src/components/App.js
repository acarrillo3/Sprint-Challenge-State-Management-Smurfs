import React, { Component } from "react";

import SmurfsList from "./SmurfsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> Welcome to Smurfs Town !</h1>
        </header>
        <SmurfsList />
      </div>
    );
  }
}

export default App;
