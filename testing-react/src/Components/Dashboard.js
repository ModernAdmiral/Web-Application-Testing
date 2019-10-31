import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  return (
    <>
      <Display balls={ball} strikes={strike} />
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          setBall(ball + 1);
        }}
      >
        ball!
      </button>
      <button
        onClick={() => {
          setStrike(strike + 1);
        }}
      >
        strike!
      </button>
    </>
  );
};

export default Dashboard;
