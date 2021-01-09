import React, { Component } from "react";

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "aaaaaa",
      id: "333333",
      mob: "55555",
    };
  }
  save = () => {
    console.log("form submit --> form data ", this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {/* <form onSubmit={this.save}>
          Name <input type="text" />
          <br />
          id <input type="text" />
          <br />
          mob <input type="text" />
          <br />
          <button type="submit">Save</button>
        </form> */}
        Name{" "}
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        id{" "}
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => this.setState({ id: e.target.value })}
        />
        <br />
        mob{" "}
        <input
          type="text"
          value={this.state.mob}
          onChange={(e) => this.setState({ mob: e.target.value })}
        />
        <br />
        <button onClick={this.save}>submit</button>
      </div>
    );
  }
}

export default Forms;
