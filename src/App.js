import React from "react";
import { ClockView } from "./ClockView";
import "./App.css";

function App() {
  return (
    <div style={{ paddingLeft: "30px" }}>

      <ClockView />

      <h1>Please only click the button once !</h1>

    </div>
  );
}

export default App;
