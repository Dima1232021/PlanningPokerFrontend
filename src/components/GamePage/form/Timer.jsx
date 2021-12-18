import React, { useState, useEffect, useRef } from "react";
import useInterval from "../../../hooks/useInterval";

export default function Timer() {
  const idInterval = useRef();
  //   const [currentTime, setCurrentTime] = useState(null);
  const [completionTime, setCompletionTime] = useState(null);
  const [countdown, setСountdown] = useState(60);

  useInterval(
    () => {
      setСountdown(countdown - 1);
    },
    completionTime && countdown ? 1000 : null
  );

  useEffect(() => {
    if (completionTime) {
      const currentTime = Math.floor(new Date().getTime() / 1000);
      const difference = completionTime - currentTime;
      difference > 0 && setСountdown(difference);
    }
  }, [completionTime]);

  function start() {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    setCompletionTime(currentTime + countdown);
  }

  function addTime() {
    completionTime
      ? setCompletionTime((value) => value + 30)
      : setСountdown((value) => value + 30);
  }

  function subtractTime() {
    if (countdown - 30 >= 30) {
      completionTime
        ? setCompletionTime(completionTime - 30)
        : setСountdown((value) => value - 30);
    }
  }
  return (
    <div className="timer">
      <p>{countdown}</p>

      <button onClick={addTime} className="form__btn-answer">
        +30c
      </button>

      <button onClick={subtractTime} className="form__btn-answer">
        -30c
      </button>

      <button onClick={start} className="form__btn-answer">
        Start
      </button>

      <button>Pause</button>
    </div>
  );
}
