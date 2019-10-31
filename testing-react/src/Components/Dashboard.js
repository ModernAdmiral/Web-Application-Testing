import React, { Component, useState } from "react";
import Display from "./Display";

export default class Dashboard extends Component {
  //   const [ball, setBall] = useState(0);
  //   const [strike, setStrike] = useState(0);
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }
  render() {
    return (
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <h1>Dashboard</h1>
        <button
          onClick={() => {
            this.setState({ balls: this.state.balls + 1 });
          }}
        >
          ball!
        </button>
        <button
          onClick={() => {
            this.setState({ strikes: this.state.strikes + 1 });
          }}
        >
          strike!
        </button>
      </>
    );
  }
}
