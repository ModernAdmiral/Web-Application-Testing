import React from "react";

const Display = props => {
  return (
    <>
      <h1>Display</h1>
      <div>
        <h2>Balls: {props.balls}</h2>
        <h2>Strikes: {props.strikes}</h2>
      </div>
    </>
  );
};

export default Display;
