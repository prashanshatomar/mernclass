import React, { Component } from "react";

export class ListAndKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { name: "prashansha" },
        { name: "parisha" },
        { name: "vipin" },
        { name: "vipin" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h4>ListAndKeys</h4>
        <ul>
          {this.state.arr.map((v, i) => (
            <li key={i}>
              <h1>{v.name}</h1>
            </li>
          ))}
          {/* <li>11</li>
          <li>33</li>
          <li>44</li>
          <li>565</li> */}
        </ul>
      </div>
    );
  }
}

export default ListAndKeys;
