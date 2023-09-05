import React, { useState, useEffect } from "react";

const ReadingTime = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    function calculateReadingTime() {
      const wpm = 225;
      const words = document
        .querySelector("#article")
        .innerText.trim()
        .split(/\s+/).length;
      const calculatedTime = Math.ceil(words / wpm);
      return calculatedTime;
    }

    const calculatedTime = calculateReadingTime();
    setTime(calculatedTime);
  }, []);

  return <span id="time">{time} minute read</span>;
};

export default ReadingTime;
