import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     onTimeout();
  //   }, timeout);

  //   return () => {
  //     clearTimeout(timerId); // Clear the timeout on unmount
  //   };
  // }, [timeout, onTimeout]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (typeof onTimeout === "function") {
        // Check if onTimeout is a function
        onTimeout(); // Call onTimeout if it's a function
      }
    }, timeout);

    return () => {
      clearTimeout(timerId); // Clear the timeout on unmount
    };
  }, [timeout, onTimeout]); // Dependency array includes onTimeout

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(intervalId); // Clear the interval on unmount
    };
  }, []);

  return (
    <progress
      id="question_time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
};

export default QuestionTimer;
