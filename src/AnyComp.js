import React, { Component } from "react";

export class AnyComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props --> ", this.props);
    return (
      <div>
        <h4>Name - {this.props.name}</h4>
        <h4>Mob - {this.props.mob}</h4>
      </div>
    );
  }
}

export default AnyComp;
