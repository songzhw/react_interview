import React, { useState } from "react";

let intervalHandler = 0;

export const ClockPage = () => {
    const [time, setTime] = useState(60);

    const countDown = () => {
      console.log(`clicked the button`)
      intervalHandler = setInterval(() => {
        console.log(`ClockPage.countDown() : time =`, time);
        setTime(time - 1);
      }, 1000);
    };


    return (
      <div>
        <h1> 15: {time}</h1>
        <button onClick={countDown}>start</button>
      </div>
    );
  }
;
