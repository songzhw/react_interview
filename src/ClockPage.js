import React, {useState} from "react";

let intervalHandler = 0;

export const ClockPage = () => {
    const [time, setTime] = useState(60);

    const countDown = () => {
      intervalHandler = setInterval(() => {
        console.log(`szw time =`, time); //time每隔一秒, 打印出来的都是60
        setTime(time - 1);
      }, 1000);
    }


    return (
      <div>
        <h1> 15: {time}</h1>
        <button onClick={countDown}>start</button>
      </div>
    );
  }
;
