import React, { Component } from "react";
import AnyComp from "./AnyComp";

export class LiftingUpState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ashutosh",
      valid: true,
      mob: "r349328469324",
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h4>LiftingUpState - {this.state.name}</h4>
        <AnyComp name={this.state.name} />
      </div>
    );
  }
}

export default LiftingUpState;
