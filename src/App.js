import React, { Component } from "react";
import Forms from "./Forms";
import Home from "./Home";
import LiftingUpState from "./LiftingUpState";
import ListAndKeys from "./ListAndKeys";
import Login from "./Login";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      name: "fkjsgjfk",
    };
  }
  render() {
    return (
      <div>
        {/* {this.state.isValid ? <Home /> : <Login />} */}
        {/* <LiftingUpState /> */}
        {/* <Forms /> */}
        <ListAndKeys />
      </div>
    );
  }
}

export default App;
