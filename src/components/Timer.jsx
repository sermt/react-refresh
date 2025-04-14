import React from "react";

export default function Timer() {
  const [seconds, setSeconds] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive]);

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <section>
      <h2>Timer exercise</h2>
      <p>{seconds}</p>

      <menu>
        <button onClick={() => setIsActive((prev) => !prev)}>
          {isActive ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </menu>
    </section>
  );
}
